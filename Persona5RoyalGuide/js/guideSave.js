class GuideSave {
    constructor() {
        this.numberHotkeysEnabled = true;
        this.navigationHotkeysEnabled = true;
        this.escapeHotkeyEnabled = true;

        this.selectedDate = '';
        this.selectedMonth = '';

        this.notepadContent = '';
        this.highlightedWordsContent = '';
    }

    saveToLocalStorage() {
        const data = JSON.stringify(this);
        localStorage.setItem("persona5RoyalGuideSave", data);
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem("persona5RoyalGuideSave");
        if (data) {
            const parsedData = JSON.parse(data);
            Object.assign(this, parsedData);
        }
    }

    saveDate(month, date) {
        guideSave.selectedDate = date;
        guideSave.selectedMonth = month;
        guideSave.saveToLocalStorage();
    }
}