// ui/GuideListRenderer.js - Handles rendering the guide list
class GuideListRenderer {
    constructor(appState, elements) {
        this.state = appState;
        this.elements = elements; // { list, progressSpan, etc. }
        
        // Subscribe to state changes
        this.state.subscribe('currentGuide', () => this.render());
        this.state.subscribe('settings', () => this.updateClasses());
    }

    render() {
        const guide = this.state.currentGuide;
        if (!guide) {
            this.elements.list.innerHTML = '';
            this.elements.progressSpan.textContent = '';
            return;
        }

        this.elements.list.innerHTML = '';
        this.updateClasses();
        
        guide.items.forEach((item, index) => {
            const itemRenderer = new ListItemRenderer(item, index, this.state);
            this.elements.list.appendChild(itemRenderer.render());
        });

        this.updateProgress(guide);
    }

    updateClasses() {
        const list = this.elements.list;
        list.classList.toggle('collapse-completed', this.state.settings.collapseChecked);
        list.classList.toggle('items-draggable', this.state.settings.itemsDraggable);
        list.classList.toggle('easy-tick', this.state.settings.easyTick);
    }

    updateProgress(guide) {
        const progress = guide.getProgress();
        this.elements.progressSpan.textContent = 
            `${progress.completed}/${progress.total} (${progress.percentage}%)`;
    }
}