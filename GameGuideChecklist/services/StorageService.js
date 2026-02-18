// services/StorageService.js - Just handles persistence
class StorageService {
    constructor(storageKey = 'gameGuideChecklist') {
        this.storageKey = storageKey;
    }

    save(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Save failed:', error);
            return false;
        }
    }

    load() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Load failed:', error);
            return null;
        }
    }
}