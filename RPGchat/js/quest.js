class Quest {
    constructor() {
        this.type;
    }

    update() {
        switch(this.type) {
            case("dialog"):
                this.dialog();
                break;
            case("text"):
                this.text();
                break;
            case("skill check"):
        }
    }
}