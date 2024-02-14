class View {
    constructor() {
        this.DrawCityView();
        this.collectables = [];
    }

    Update(model, collectable) {
        money.innerText = Round(model.money);

        messageOutput.innerHTML = "";
        if (collectable.rarity > 2)
            this.showRareCollectable(collectable);
        else
            this.showCommonCollectable(collectable);
    }


    showCommonCollectable(collectable) {
        const message = document.createElement("p");
        message.innerHTML = collectable.name;
        message.id = "message";

        messageOutput.appendChild(message);
    }

    showRareCollectable(collectable) {
        const table = document.createElement("table");

        const tr1 = document.createElement("tr");
        const th = document.createElement("th");
        th.innerText = collectable.name;
        tr1.appendChild(th);

        const tr2 = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = `<img src="images/${collectable.type}/${collectable.id}.png">`
        tr2.appendChild(td);


        table.appendChild(tr1);
        table.appendChild(tr2);
        messageOutput.appendChild(table)
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

    UpdateCollectionView() {
        if (this.collectables );
    }
}