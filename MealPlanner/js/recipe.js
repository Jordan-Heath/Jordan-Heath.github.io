class Recipe {
    constructor(title, description, tags, ingredients, method) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.ingredients = ingredients;
        this.method = method;
        //this.products; generateProducts();
    }

    generateRecipeHTML() {
        return `
                <div class="recipe">
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${this.ingredients.map(ingredient => `<li>${Object.keys(ingredient)[0]}: ${ingredient[Object.keys(ingredient)[0]]}</li>`).join('')}
                    </ul>
                    <h3>Method:</h3>
                    <ol>
                        ${this.method.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            `;
    }
}