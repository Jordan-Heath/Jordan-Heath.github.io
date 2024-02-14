class View {
    constructor() {
        this.DrawCityView();
    }

    Update(model, collectable) {
        money.innerText = convertToCurrency(model.money);

        messageOutput.innerHTML = "";
        if (collectable.rarity > 2)
            this.showRareCollectable(collectable);
        else
            this.showCommonCollectable(collectable);

        if (!collectionView.hidden)
            this.UpdateCollectionView(model.collectables);
    }


    showCommonCollectable(collectable) {
        const message = document.createElement("p");
        message.innerHTML = collectable.name;
        message.id = "message";

        messageOutput.appendChild(message);
    }

    showRareCollectable(collectable) {
        const collectableTable = CreateCollectableTable(collectable);
        collectableTable.style.boxShadow = `0px 0px 10px 5px var(--rarity-${collectable.rarity})`;
        messageOutput.appendChild(collectableTable);
    }

    DrawCityView() {
        const cityView = CreateDiv("cityView");

        cityView.appendChild(CreateDiv("pavement"));
        cityView.appendChild(CreateDiv("frontBuildings"));
        cityView.appendChild(CreateDiv("backBuildings"));
        cityView.appendChild(CreateDiv("trees"));
        cityView.appendChild(CreateDiv("characterShadow"));
        cityView.appendChild(CreateDiv("character"));

        backgroundLayers.innerHTML = "";
        backgroundLayers.appendChild(cityView);
    }

    UpdateCollectionView(collectables) {
        //initialise the tables
        collectablesGrid.innerHTML = "";
        collectables.forEach(collectable => {
            collectablesGrid.appendChild(CreateCollectableTable(collectable));
        });
    }
}