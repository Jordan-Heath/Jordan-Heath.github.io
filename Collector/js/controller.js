class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.Initialize();
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

        mapMenuButton.addEventListener('click', () => {
            this.OpenMapView();
        });

        closeCollectionButton.addEventListener('click', () => {
            this.CloseCollectionView();
        });

        closeShopButton.addEventListener('click', () => {
            this.CloseShopView();
        });

        closeMapButton.addEventListener('click', () => {
            this.CloseMapView();
        });

        this.startUpdateInterval();
    }

    startUpdateInterval() {
        setInterval(() => {
            let collectable = this.model.Update();
            this.view.Update(model, collectable);
        }, SEARCH_INTERVAL);
    }

    /* Main Button Controls */
    //#region MainView
    ToggleMenu() {
        menu.hidden = !menu.hidden;
    }

    OpenCollectionView() {
        menu.hidden = true;
        this.view.UpdateCollectionView(this.model.collectables);
        collectionView.hidden = false;
    }

    OpenShopView() {
        menu.hidden = true;
        shopView.hidden = false;
    }

    OpenMapView() {
        menu.hidden = true;
        mapView.hidden = false;
    }
    //#endregion MainView

    /* Collection Button controls */
    //#region CollectionView
    CloseCollectionView() {
        collectionView.hidden = true;
    }
    //#endregion CollectionView

    /* Shop Button controls */
    //#region ShopView
    CloseShopView() {
        shopView.hidden = true;
    }
    //#endregion ShopView

    /* Map Button controls */
    //#region MapView
    CloseMapView() {
        mapView.hidden = true;
    }
    //#endregion MapView
}