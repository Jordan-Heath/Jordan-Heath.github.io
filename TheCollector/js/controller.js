class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.Initialize();
        this.view.Initialize(this.model);
    }

    /* Initialization Methods */
    //#region Inititalize
    Initialize() {
        this.InitializeButtons();

        //attempt to load from cookies
        this.model.LoadFromCookies();

        this.StartUpdateInterval();
    }

    InitializeButtons() {
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

        exitButton.addEventListener('click', () => {
            if(window.confirm("Are you sure you wish to quit?")) {
                window.location.href = '../index.html';
            }
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
    }

    StartUpdateInterval() {
        setInterval(() => {
            this.Update();
        }, SEARCH_INTERVAL);

        setInterval(() => {
            this.model.SaveToCookies();
        }, SAVE_INTERVAL);
    }

    Update() {
        let collectable = this.model.Update();
        this.view.Update(model, collectable);
    }
    //#endregion Inititalize

    /* Main Button Controls */
    //#region MainView
    ToggleMenu() {
        menu.hidden = !menu.hidden;
    }

    OpenCollectionView() {
        menu.hidden = true;
        this.view.UpdateCollectionView(this.model);
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

    /* Shop Button Controls */
    //#region ShopView
    CloseShopView() {
        shopView.hidden = true;
    }
    //#endregion ShopView

    /* Map Button Controls */
    //#region MapView
    CloseMapView() {
        mapView.hidden = true;
    }
    //#endregion MapView
}