// models/Guide.js - Pure data only, no DOM
class Guide {
    constructor(name, items = [], id = Date.now()) {
        this.id = id;
        this.name = name;
        this.items = items.map(item => 
            item instanceof ListItem ? item : new ListItem(item.text, item.checked)
        );
    }

    addItem(text) {
        const item = new ListItem(text, false);
        this.items.push(item);
        return item;
    }

    updateItem(index, updates) {
        Object.assign(this.items[index], updates);
    }

    deleteItem(index) {
        this.items.splice(index, 1);
    }

    reorderItem(oldIndex, newIndex) {
        const [item] = this.items.splice(oldIndex, 1);
        this.items.splice(newIndex, 0, item);
    }

    getProgress() {
        const completed = this.items.filter(i => i.checked).length;
        return {
            completed,
            total: this.items.length,
            percentage: this.items.length ? (completed / this.items.length * 100).toFixed() : 0
        };
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            items: this.items.map(i => i.toJSON())
        };
    }

    static fromJSON(json) {
        return new Guide(json.name, json.items, json.id);
    }
}