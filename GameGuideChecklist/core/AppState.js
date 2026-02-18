// core/AppState.js - Single source of truth
class AppState {
    constructor(storageService) {
        this.storage = storageService;
        this.guides = [];
        this.currentGuideId = null;
        this.settings = {
            collapseChecked: false,
            itemsDraggable: false,
            easyTick: true,
            highlightNextStep: true,
            autoSelect: true
        };
        
        this.listeners = {
            guides: [],
            currentGuide: [],
            settings: []
        };
    }

    // Subscription system
    subscribe(event, callback) {
        this.listeners[event].push(callback);
        return () => {
            this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
        };
    }

    notify(event, data) {
        this.listeners[event].forEach(cb => cb(data));
    }

    // Guide management
    addGuide(guide) {
        this.guides.push(guide);
        this.save();
        this.notify('guides', this.guides);
        
        if (this.settings.autoSelect) {
            this.setCurrentGuide(guide.id);
        }
        return guide;
    }

    updateGuide(guideId, updates) {
        const index = this.guides.findIndex(g => g.id === guideId);
        if (index !== -1) {
            Object.assign(this.guides[index], updates);
            this.save();
            this.notify('guides', this.guides);
            if (this.currentGuideId === guideId) {
                this.notify('currentGuide', this.currentGuide);
            }
        }
    }

    deleteGuide(guideId) {
        this.guides = this.guides.filter(g => g.id !== guideId);
        if (this.currentGuideId === guideId) {
            this.setCurrentGuide(null);
        }
        this.save();
        this.notify('guides', this.guides);
    }

    setCurrentGuide(guideId) {
        this.currentGuideId = guideId;
        this.save();
        this.notify('currentGuide', this.currentGuide);
    }

    get currentGuide() {
        return this.guides.find(g => g.id === this.currentGuideId);
    }

    // Settings
    updateSettings(updates) {
        Object.assign(this.settings, updates);
        this.save();
        this.notify('settings', this.settings);
    }

    // Persistence
    save() {
        const data = {
            guides: this.guides.map(g => g.toJSON()),
            currentGuideId: this.currentGuideId,
            settings: this.settings
        };
        this.storage.save(data);
    }

    load() {
        const data = this.storage.load();
        if (data) {
            this.guides = (data.guides || []).map(g => Guide.fromJSON(g));
            this.currentGuideId = data.currentGuideId || null;
            this.settings = { ...this.settings, ...(data.settings || {}) };
            this.notify('guides', this.guides);
            this.notify('currentGuide', this.currentGuide);
            this.notify('settings', this.settings);
        }
    }
}