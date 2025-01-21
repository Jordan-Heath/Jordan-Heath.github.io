class Recipe {
    // constructor() {
    //     // this.mealID = null;
    //     this.title = "";
    //     this.description = "";
    //     this.tags = [];
    //     this.ingredients = [];
    //     this.method = [];
    // }

    constructor(title, description, tags, ingredients, method) {
        // this.mealID = null;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.ingredients = ingredients;
        this.method = method;
    }

    generateRecipeHTML() {
        return `<div class="recipe">
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                    <p>Tags: ${this.tags.join(", ")}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${
                            this.ingredients.map(ingredient => 
                                `<li>${ingredient.ingredient}: ${ingredient.measurement}</li>`
                            ).join('')
                        }
                    </ul>
                    <h3>Method:</h3>
                    <ol>
                        ${this.method.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>`;
    }
}