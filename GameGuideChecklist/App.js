class App {
    constructor() {
        this.storage = new StorageService();
        this.state = new AppState(this.storage);
        this.renderers = new Map(); // Store item renderers by guide ID

        // Cache DOM elements
        this.elements = {
            guideSelect: document.getElementById('guideSelect'),
            guideList: document.getElementById('guideList'),
            guideProgressContainer: document.getElementById('guideProgressContainer'),
            guideProgressBar: document.getElementById('guideProgressBar'),
            guideProgressText: document.getElementById('guideProgressText'),
            newGuideControls: document.getElementById('newGuideControls'),
            guideControls: document.getElementById('guideControls'),
            newGuideInput: document.getElementById('newGuideInput'),
            newGuideTextArea: document.getElementById('newGuideTextArea'),
            generateAndSaveButton: document.getElementById('generateAndSaveButton'),
            collapseCheckedItemsCheckbox: document.getElementById('collapseCheckedItemsCheckbox'),
            makeItemsDraggableCheckbox: document.getElementById('makeItemsDraggableCheckbox'),
            enableEasyTickCheckbox: document.getElementById('enableEasyTickCheckbox'),
            highlightNextStepCheckbox: document.getElementById('highlightNextStepCheckbox'),
            addItemInput: document.getElementById('addItemInput'),
            addItemButton: document.getElementById('addItemButton'),
            deleteGuideButton: document.getElementById('deleteGuideButton')
        };

        // Bind methods
        this.handleGuideSelect = this.handleGuideSelect.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.createNewGuide = this.createNewGuide.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.deleteCurrentGuide = this.deleteCurrentGuide.bind(this);
        this.updateHighlightNextStep = this.updateHighlightNextStep.bind(this);

        this.setupEventListeners();
        this.initialize();
    }

    setupEventListeners() {
        // Guide selection
        this.elements.guideSelect.addEventListener('change', this.handleGuideSelect);

        // New guide creation
        this.elements.generateAndSaveButton.addEventListener('click', this.createNewGuide);

        // Settings checkboxes
        this.elements.guideControls.querySelector('summary').addEventListener('click', () => {
            setTimeout(() => this.elements.addItemInput.focus(), 50);
        });

        this.elements.collapseCheckedItemsCheckbox.addEventListener('change', (e) => {
            this.state.updateSettings({ collapseChecked: e.target.checked });
        });

        this.elements.makeItemsDraggableCheckbox.addEventListener('change', (e) => {
            this.state.updateSettings({ itemsDraggable: e.target.checked });
            this.renderCurrentGuide();
        });

        this.elements.enableEasyTickCheckbox.addEventListener('change', (e) => {
            this.state.updateSettings({ easyTick: e.target.checked });
        });

        this.elements.highlightNextStepCheckbox.addEventListener('change', (e) => {
            this.state.updateSettings({ highlightNextStep: e.target.checked });
            this.updateHighlightNextStep();
        });

        // Add item
        this.elements.addItemInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addNewItem();
            }
        });

        this.elements.addItemButton.addEventListener('click', this.addNewItem);

        // Delete guide
        this.elements.deleteGuideButton.addEventListener('click', this.deleteCurrentGuide);

        // Drag and drop
        this.elements.guideList.addEventListener('dragover', this.handleDragOver);
        this.elements.guideList.addEventListener('drop', this.handleDrop);

        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // - or Escape to close controls
            if (e.key === '-' || e.key === 'Escape' && this.elements.guideControls.open) {
                this.elements.guideControls.open = false;
            }

            // + to toggle open controls
            if (e.key === '+' && !this.elements.guideControls.open) {
                this.elements.guideControls.open = this.elements.guideControls.hasAttribute('open') ? false : true;
            }
        });
    }

    initialize() {
        // Load saved data
        this.state.load();

        // Subscribe to state changes
        this.state.subscribe('guides', () => this.updateGuideSelect());
        this.state.subscribe('currentGuide', () => this.renderCurrentGuide());
        this.state.subscribe('settings', (settings) => this.syncSettingsToUI(settings));

        // Initial UI setup
        this.updateGuideSelect();
        this.renderCurrentGuide();
    }

    handleGuideSelect() {
        const guideId = Number(this.elements.guideSelect.value) || null;
        this.state.setCurrentGuide(guideId);
    }

    handleDragOver(e) {
        e.preventDefault();
        const list = this.elements.guideList;
        const dragging = document.querySelector('.dragging');
        if (!dragging) return;

        const afterElement = this.getDragAfterElement(list, e.clientY);
        if (afterElement) {
            list.insertBefore(dragging, afterElement);
        } else {
            list.appendChild(dragging);
        }
    }

    handleDrop(e) {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (!dragging || !this.state.currentGuide) return;

        const oldIndex = parseInt(dragging.dataset.index);
        const newIndex = [...this.elements.guideList.children].indexOf(dragging);

        // Validate indices
        if (!isNaN(oldIndex) && !isNaN(newIndex) &&
            oldIndex !== newIndex &&
            oldIndex >= 0 && oldIndex < this.state.currentGuide.items.length &&
            newIndex >= 0 && newIndex < this.state.currentGuide.items.length) {

            this.state.currentGuide.reorderItem(oldIndex, newIndex);
            this.state.updateGuide(this.state.currentGuideId, {
                items: this.state.currentGuide.items
            });
        }
    }

    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    createNewGuide() {
        const name = this.elements.newGuideInput.value.trim();
        const itemsText = this.elements.newGuideTextArea.value.trim();

        if (!name) {
            alert('Please enter a guide name');
            return;
        }

        if (!itemsText) {
            alert('Please enter at least one item');
            return;
        }

        const items = itemsText
            .split('\n')
            .map(line => line.trim())
            .filter(line => line)
            .map(text => new ListItem(text));

        const guide = new Guide(name, items);
        this.state.addGuide(guide);

        // Select the new guide
        this.state.setCurrentGuide(guide.id);
        this.updateGuideSelect();

        // Clear inputs
        this.elements.newGuideInput.value = '';
        this.elements.newGuideTextArea.value = '';
    }

    addNewItem() {
        if (!this.state.currentGuide) {
            alert('Please select a guide first');
            return;
        }

        const text = this.elements.addItemInput.value.trim();
        if (!text) return;

        this.state.currentGuide.addItem(text);
        this.state.updateGuide(this.state.currentGuideId, {
            items: this.state.currentGuide.items
        });

        this.elements.addItemInput.value = '';

        setTimeout(() => {
            this.scrollListToBottom(true);
        }, 50);
    }

    deleteCurrentGuide() {
        if (!this.state.currentGuide) return;

        if (confirm(`Delete guide "${this.state.currentGuide.name}"?`)) {
            this.state.deleteGuide(this.state.currentGuideId);
        }
    }

    renderCurrentGuide() {
        // Clean up old renderers
        this.renderers.forEach(renderer => renderer.destroy?.());
        this.renderers.clear();

        const guide = this.state.currentGuide;
        const list = this.elements.guideList;

        // Clear list
        list.innerHTML = '';

        // Show/hide appropriate controls
        if (guide) {
            this.elements.newGuideControls.style.display = 'none';
            this.elements.guideList.style.display = 'block';
            this.elements.guideControls.style.display = 'block';
            this.elements.guideProgressContainer.style.display = 'block';
            this.elements.deleteGuideButton.style.display = 'block';

            // Render items
            guide.items.forEach((item, index) => {
                const renderer = new ListItemRenderer(item, index, this.state, guide.id);
                this.renderers.set(renderer, true);
                list.appendChild(renderer.render());
            });

            // Update progress bar
            this.updateProgress(guide);

            // Apply classes
            this.applyListClasses();
            this.updateHighlightNextStep();
        } else {
            this.elements.newGuideControls.style.display = 'block';
            this.elements.guideControls.style.display = 'none';
            this.elements.guideList.style.display = 'none';
            this.elements.guideProgressContainer.style.display = 'none';
            this.elements.deleteGuideButton.style.display = 'none';

            // Clear progress bar
            this.updateProgress(null);
        }
    }

    updateProgress(guide) {
        if (!guide) {
            if (this.elements.guideProgressBar) {
                this.elements.guideProgressBar.style.width = '0%';
                this.elements.guideProgressBar.setAttribute('aria-valuenow', '0');
            }
            if (this.elements.guideProgressText) {
                this.elements.guideProgressText.textContent = '0/0 (0%)';
            }
            return;
        }

        const progress = guide.getProgress();
        const percentage = Math.min(100, Math.max(0, progress.percentage));

        if (this.elements.guideProgressBar) {
            this.elements.guideProgressBar.style.width = `${percentage}%`;
            this.elements.guideProgressBar.setAttribute('aria-valuenow', percentage);

            if (percentage < 33) {
                this.elements.guideProgressBar.setAttribute('data-progress', 'low');
            } else if (percentage < 66) {
                this.elements.guideProgressBar.setAttribute('data-progress', 'medium');
            } else {
                this.elements.guideProgressBar.setAttribute('data-progress', 'high');
            }

            // Add data attribute for styling
            if (percentage === 100) {
                this.elements.guideProgressBar.setAttribute('data-complete', 'true');
            } else {
                this.elements.guideProgressBar.removeAttribute('data-complete');
            }
        }

        if (this.elements.guideProgressText) {
            this.elements.guideProgressText.textContent =
                `${progress.completed}/${progress.total} (${progress.percentage}%)`;
        }
    }

    applyListClasses() {
        const list = this.elements.guideList;
        list.classList.toggle('collapse-completed', this.state.settings.collapseChecked);
        list.classList.toggle('items-draggable', this.state.settings.itemsDraggable);
        list.classList.toggle('easy-tick', this.state.settings.easyTick);
    }

    updateHighlightNextStep() {
        if (!this.state.currentGuide) return;

        // Remove existing highlights
        document.querySelectorAll('.highlighted').forEach(el => {
            el.classList.remove('highlighted');
        });

        if (!this.state.settings.highlightNextStep) return;

        // Find first uncompleted item
        const items = this.elements.guideList.querySelectorAll('li');
        for (let item of items) {
            if (!item.classList.contains('completed')) {
                item.classList.add('highlighted');
                break;
            }
        }
    }

    updateGuideSelect() {
        const select = this.elements.guideSelect;
        select.innerHTML = '<option value="">---New Guide---</option>';

        this.state.guides.forEach(guide => {
            const option = document.createElement('option');
            option.value = guide.id;
            option.textContent = guide.name;
            option.selected = guide.id === this.state.currentGuideId;
            select.appendChild(option);
        });
    }

    syncSettingsToUI(settings) {
        this.elements.collapseCheckedItemsCheckbox.checked = settings.collapseChecked;
        this.elements.makeItemsDraggableCheckbox.checked = settings.itemsDraggable;
        this.elements.enableEasyTickCheckbox.checked = settings.easyTick;
        this.elements.highlightNextStepCheckbox.checked = settings.highlightNextStep;

        this.applyListClasses();
        this.updateHighlightNextStep();
    }

    scrollListToBottom(smooth = true) {
        const list = this.elements.guideList;
        if (list) {
            list.scrollTo({
                top: list.scrollHeight,
                behavior: smooth ? 'smooth' : 'auto'
            });
        }
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});