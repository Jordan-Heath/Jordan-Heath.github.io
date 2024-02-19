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
        this.view.LoadLocation(this.model.currentLocation);

        setInterval(() => {
            this.model.SaveToCookies();
            this.view.SaveMessage('Saved');
        }, SAVE_INTERVAL);

        this.Update();
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

        saveMenuButton.addEventListener('click', () => {
            this.SaveButton();
        });

        resetMenuButton.addEventListener('click', () => {
            this.ResetButton();
        });

        exitMenuButton.addEventListener('click', () => {
            this.ExitButton();
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

    Update() {
        try {
            let collectable = this.model.Update();

            let combo; 
            if (collectable.numberOwned === 1) {
                combo = this.model.CheckCombos();
            }
    
            this.view.Update(model, collectable, combo);
    
            const searchInterval = this.model.SearchInterval();
            setTimeout(() => this.Update(), searchInterval);
        } catch (error) {
            this.view.ErrorMessage(`An error occured on update: ${error}`)
        }
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
        this.view.UpdateShopView(this.model);
        shopView.hidden = false;
    }

    OpenMapView() {
        menu.hidden = true;
        this.view.UpdateMapView(this.model);
        mapView.hidden = false;
    }

    SaveButton() {
        this.model.SaveToCookies();
        this.view.SaveMessage('Saved');
    }

    ResetButton() {
        if(window.confirm("Are you sure you wish to reset?")) {
            model = new Model();
            this.model = model;
            this.model.SaveToCookies();
            window.location.href = 'TheCollector.html';
        }
    }
    ExitButton() {
        this.model.SaveToCookies();
        if(window.confirm("Are you sure you wish to quit?")) {
            window.location.href = '../index.html';
        }
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

    Purchase(shopItemId) {
        this.model.Purchase(shopItemId);
        this.view.UpdatePlayerDetails(this.model);
        this.view.UpdateShopView(this.model);
    }
    //#endregion ShopView

    /* Map Button Controls */
    //#region MapView
    CloseMapView() {
        mapView.hidden = true;
    }
    Move(location) {
        mapView.hidden = true;
        this.model.currentLocation = location;
        this.view.LoadLocation(location);
    }
    //#endregion MapView
}