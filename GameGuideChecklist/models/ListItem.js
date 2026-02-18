// models/ListItem.js - Pure data only, no DOM
class ListItem {
    constructor(text, checked = false) {
        this.text = text;
        this.checked = checked;
    }

    toggle() {
        this.checked = !this.checked;
    }

    toJSON() {
        return {
            text: this.text,
            checked: this.checked
        };
    }
}