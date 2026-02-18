class ListItemRenderer {
    constructor(item, index, state, guideId) {
        this.item = item;
        this.index = index;
        this.state = state;
        this.guideId = guideId;
        this.element = null;
        this.isEditing = false;
    }

    render() {
        this.element = document.createElement('li');
        this.element.dataset.index = this.index;
        this.updateClasses();
        this.setupDragEvents();
        this.buildDOM();
        return this.element;
    }

    updateClasses() {
        this.element.classList.toggle('completed', this.item.checked);
        this.element.classList.toggle('edit-mode', this.isEditing);
        this.element.draggable = this.state.settings.itemsDraggable && !this.isEditing;
    }

    setupDragEvents() {
        this.element.addEventListener('dragstart', (event) => {
            this.element.classList.add('dragging');
            event.dataTransfer.setData('text/plain', this.index);
        });

        this.element.addEventListener('dragend', () => {
            this.element.classList.remove('dragging');
        });

        // Prevent drag on interactive elements
        this.element.addEventListener('dragstart', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') {
                e.preventDefault();
            }
        });
    }

    buildDOM() {
        this.element.appendChild(this.createMainContent());
        this.element.appendChild(this.createControls());
    }

    createMainContent() {
        const div = document.createElement('div');
        div.className = 'mainli';

        // Checkbox
        const checkbox = this.createCheckbox();

        // Text display
        const textDisplay = this.createTextDisplay();

        // Edit input
        const editInput = this.createEditInput();

        // Edit buttons
        const saveBtn = this.createButton('Save', 'save-btn', () => this.saveEdit());
        const cancelBtn = this.createButton('Cancel', 'cancel-btn', () => this.cancelEdit());

        div.append(checkbox, textDisplay, editInput, saveBtn, cancelBtn);

        // Easy tick - toggle on row click
        div.addEventListener('click', (e) => {
            if (this.state.settings.easyTick) {
                // Don't toggle if clicking on interactive elements
                const tag = e.target.tagName.toLowerCase();
                if (!['input', 'textarea', 'button'].includes(tag)) {
                    this.toggleItem();
                }
            }
        });

        return div;
    }

    createCheckbox() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.item.checked;
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleItem();
        });
        return checkbox;
    }

    createTextDisplay() {
        const p = document.createElement('p');
        p.textContent = this.item.text;
        return p;
    }

    createEditInput() {
        const textinput = document.createElement('input');
        textinput.type = 'text';
        textinput.value = this.item.text;
        textinput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.saveEdit();
            } else if (e.key === 'Escape') {
                this.cancelEdit();
            }
        });
        return textinput;
    }

    createControls() {
        const div = document.createElement('div');
        div.className = 'licontrols';

        const editBtn = this.createButton('✎', 'edit-btn', () => this.enableEditMode());
        const deleteBtn = this.createButton('×', 'delete-btn', () => this.deleteItem());

        div.appendChild(editBtn);
        div.appendChild(deleteBtn);

        return div;
    }

    createButton(text, className, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            onClick();
        });
        return button;
    }

    toggleItem() {
        this.item.toggle();
        this.updateClasses();

        // Update in state
        const guide = this.state.currentGuide;
        if (guide) {
            this.state.updateGuide(this.guideId, {
                items: guide.items
            });
        }
    }

    enableEditMode() {
        this.isEditing = true;
        this.updateClasses();
        this.element.draggable = false;

        // Focus the textinput
        const textinput = this.element.querySelector('input[type="text"]');
        if (textinput) {
            textinput.focus();
            textinput.select();
        }

        if (window.app) {
            window.app.updateProgress(guide);
        }
    }

    saveEdit() {
        const textinput = this.element.querySelector('input[type="text"]');
        const newText = textinput.value.trim();

        if (newText) {
            this.item.text = newText;
            this.isEditing = false;
            this.updateClasses();

            // Update display
            const p = this.element.querySelector('p');
            if (p) p.textContent = newText;

            // Update in state
            const guide = this.state.currentGuide;
            if (guide) {
                this.state.updateGuide(this.guideId, {
                    items: guide.items
                });
            }
        }
    }

    cancelEdit() {
        const textinput = this.element.querySelector('input[type="text"]');

        // Reset textinput to original value
        textinput.value = this.item.text;

        this.isEditing = false;
        this.updateClasses();
    }

    deleteItem() {
        if (confirm('Delete this item?')) {
            const guide = this.state.currentGuide;
            if (guide) {
                guide.deleteItem(this.index);
                this.state.updateGuide(this.guideId, {
                    items: guide.items
                });
            }
        }
    }

    highlight() {
        this.element.classList.add('highlighted');
    }

    removeHighlight() {
        this.element.classList.remove('highlighted');
    }

    destroy() {
        if (this.element) {
            this.element.removeEventListener('dragstart', this.dragStartHandler);
            this.element.removeEventListener('dragend', this.dragEndHandler);
        }
    }
}