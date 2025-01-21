const tagSelect = document.getElementById("tagSelect");
const recipeSelect = document.getElementById("recipeSelect");
const recipeDetailsDiv = document.getElementById("recipeDetails");

let recipesData; // Store recipes data globally


// Function to fetch and load data
function loadData() {
    recipesData = recipesJSON;

    const allTags = recipesData.flatMap(recipe => recipe.tags);
    const uniqueSortedTags = Array.from(new Set(allTags)).sort();

    // Populate the tag select menu
    const tagsWithViewAll = ["VIEW ALL", ...uniqueSortedTags];
    populateTagsSelect(tagsWithViewAll);

    // Populate the recipe select menu with "VIEW ALL" option and all recipes
    populateRecipeSelect(recipesData);

    // Add event listeners
    tagSelect.addEventListener("change", displayRecipesByTag);
    recipeSelect.addEventListener("change", displayRecipeDetails);

    displayRecipeDetails();
}

// Function to populate the tag select menu
function populateTagsSelect(tags) {
    tags.forEach(tag => {
        const tagOption = document.createElement("option");
        tagOption.value = tag;
        tagOption.textContent = tag;
        tagSelect.appendChild(tagOption);
    });
}

// Function to populate the recipe select menu
function populateRecipeSelect(recipes) {
    // Clear previous options
    recipeSelect.innerHTML = "";

    // Add "VIEW ALL" option
    const viewAllOption = document.createElement("option");
    viewAllOption.value = "VIEW ALL";
    viewAllOption.textContent = "VIEW ALL";
    recipeSelect.appendChild(viewAllOption);

    // Populate the recipe select menu with recipe names
    recipes.forEach(recipe => {
        const option = document.createElement("option");
        option.value = recipe.name;
        option.textContent = recipe.name;
        recipeSelect.appendChild(option);
    });
}

function displayRecipesByTag() {
    const selectedTag = tagSelect.value;

    if (selectedTag === "VIEW ALL") {
        // Display all recipes
        populateRecipeSelect(recipesData);
    } else {
        // Filter recipes that contain the selected tag
        const filteredRecipes = recipesData.filter(recipe => recipe.tags.includes(selectedTag));

        // Populate the recipe select menu with filtered recipes
        populateRecipeSelect(filteredRecipes);
    }

    //refresh the recipes
    displayRecipeDetails()
}

function displayRecipeDetails() {
    const selectedRecipeName = recipeSelect.value;

    // Clear previous recipe details
    recipeDetailsDiv.innerHTML = "";

    if (selectedRecipeName === "VIEW ALL") {
        const selectedTag = tagSelect.value;

        if (selectedTag === "VIEW ALL") {
            // Display all recipes
            populateRecipeSelect(recipesData);
            recipesData.forEach(recipe => displaySingleRecipeDetails(recipe));
        } else {
            // Filter recipes that contain the selected tag
            const filteredRecipes = recipesData.filter(recipe => recipe.tags.includes(selectedTag));

            // Populate the recipe select menu with filtered recipes
            populateRecipeSelect(filteredRecipes);

            // Display details for the filtered recipes
            filteredRecipes.forEach(recipe => displaySingleRecipeDetails(recipe));
        }
    } else {
        const selectedRecipe = recipesData.find(recipe => recipe.name === selectedRecipeName);
        // Display details for the selected recipe
        displaySingleRecipeDetails(selectedRecipe);
    }
}


function displaySingleRecipeDetails(recipe) {
    // Create HTML elements for recipe details
    const recipeContainerElement = document.createElement("div");
    recipeContainerElement.classList.add("recipe-container");

    const recipeNameElement = document.createElement("h2");
    recipeNameElement.textContent = recipe.name;

    const recipeDescriptionElement = document.createElement("p");
    recipeDescriptionElement.textContent = recipe.description;

    const recipeTagsElement = document.createElement("p");
    recipeTagsElement.textContent = "Tags: " + recipe.tags.join(", ");

    const recipeIngredientsElement = document.createElement("div");
    recipeIngredientsElement.classList.add("recipe-section");
    const ingredientsHeading = document.createElement("h3");
    ingredientsHeading.textContent = "Ingredients";
    recipeIngredientsElement.appendChild(ingredientsHeading);

    const ingredientsList = document.createElement("ul");
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = ingredient.ingredient + ": " + ingredient.measurement;
        ingredientsList.appendChild(li);
    });
    recipeIngredientsElement.appendChild(ingredientsList);

    const recipeMethodElement = document.createElement("div");
    recipeMethodElement.classList.add("recipe-section");
    const methodHeading = document.createElement("h3");
    methodHeading.textContent = "Method";
    recipeMethodElement.appendChild(methodHeading);

    const methodList = document.createElement("ol");
    recipe.method.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        methodList.appendChild(li);
    });
    recipeMethodElement.appendChild(methodList);

    // Append the new recipe details to the recipeDetailsDiv
    recipeContainerElement.appendChild(recipeNameElement);
    recipeContainerElement.appendChild(recipeDescriptionElement);
    recipeContainerElement.appendChild(recipeTagsElement);
    recipeContainerElement.appendChild(recipeIngredientsElement);
    recipeContainerElement.appendChild(recipeMethodElement);

    recipeDetailsDiv.appendChild(recipeContainerElement);
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});