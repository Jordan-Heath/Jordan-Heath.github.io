class Data {
    constructor() {
        this.recipes = fetchRecipes(); //fetch recipes
        this.ingredients = []; //fetch ingredients
        this.products = []; //fetch products
    }

    fetchIngredients() {
        // load the json file
        // convert to an array of Ingredient objects
        // return
    }

    fetchProducts() {
        // load the json file
        // convert to an array of Product objects
        // Find Pointers to ingredients
        // return
    }

    fetchRecipes() {
        // load the json file
        // convert to an array of Recipe objects
        // Find pointers to ingredients
        // Find pointers to Products
        // return
    }

    GetRandomRecipe() {
        //choose a recipe
        
    }
}

class Ingredient {
    constructor(id) {
        this.id = id;
    }
}

class Product {
    constructor() {
        this.ingredient;
        this.measurement;
        //this.price;
        //this.aisle;
    }
}

class Recipe {
    constructor() {
        this.title = "";
        this.description = "";
        this.ingredientAmounts = {
            key1: value1,
            key2: value2
        };
        this.method = "";
        this.products = "";
    }

    constructor(title, description, ingredients, method) {
        this.title;
        this.description;
        this.ingredients;
        this.method;
        this.products
    }
}

const data = new Data;
const selectedRecipe = data.GetRandomRecipe();