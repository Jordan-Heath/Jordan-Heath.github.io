class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    Initialize() {
        menuButton.addEventListener('click', () => {
            this.ToggleMenu();
        });

        collectionMenuButton.addEventListener('click', () => {
            this.OpenCollectionView();
        });

        shopMenuButton.addEventListener('click', () => {
            this.OpenShopView();
        });

        closeCollectionButton.addEventListener('click', () => {
            this.CloseCollectionView();
        });

        closeShopButton.addEventListener('click', () => {
            this.CloseShopView();
        });

        this.startUpdateInterval();
    }

    startUpdateInterval() {
        setInterval(() => {
            let collectable = this.model.Update();
            this.view.Update(model, collectable);
        }, SEARCH_INTERVAL);
    }




    ToggleMenu() {
        menu.hidden = !menu.hidden;
    }

    OpenCollectionView() {
        menu.hidden = true;
        //this.view.;
        collectionView.hidden = false;
    }

    OpenShopView() {
        menu.hidden = true;
        shopView.hidden = false;
    }

    CloseCollectionView() {
        collectionView.hidden = true;
    }

    CloseShopView() {
        shopView.hidden = true;
    }
}