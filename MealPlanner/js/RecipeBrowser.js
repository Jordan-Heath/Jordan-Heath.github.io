const recipesJSON = "https://jordan-heath.github.io/MealPlanner/data/recipes.json";
const tagSelect = document.getElementById("tagSelect");
const recipeSelect = document.getElementById("recipeSelect");
const recipeDetailsDiv = document.getElementById("recipeDetails");

let recipesData; // Store recipes data globally


// Function to fetch and load data
function loadData() {
    fetch(recipesJSON)
        .then(response => response.json())
        .then(data => {
            recipesData = data; // Save data globally

            // Sort recipesData alphabetically by recipe.title
            sortRecipesByTitle();

            // Extract all tags from recipes
            const allTags = recipesData.recipes.flatMap(recipe => recipe.tags);

            // Remove duplicates and sort tags alphabetically (without "VIEW ALL")
            const uniqueSortedTags = Array.from(new Set(allTags)).sort();

            // Add "VIEW ALL" at the beginning
            const tagsWithViewAll = ["VIEW ALL", ...uniqueSortedTags];

            // Populate the tag select menu
            populateTagsSelect(tagsWithViewAll);

            // Populate the recipe select menu with "VIEW ALL" option and all recipes
            populateRecipeSelect(recipesData.recipes);

            // Add event listeners
            tagSelect.addEventListener("change", displayRecipesByTag);
            recipeSelect.addEventListener("change", displayRecipeDetails);

            displayRecipeDetails();
        })
        .catch(error => console.error("Error fetching recipes:", error));
}

// Function to sort recipes alphabetically by title
function sortRecipesByTitle() {
    recipesData.recipes.sort((a, b) => a.title.localeCompare(b.title));
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

    // Populate the recipe select menu with recipe titles
    recipes.forEach(recipe => {
        const option = document.createElement("option");
        option.value = recipe.title;
        option.textContent = recipe.title;
        recipeSelect.appendChild(option);
    });
}

function displayRecipesByTag() {
    const selectedTag = tagSelect.value;

    if (selectedTag === "VIEW ALL") {
        // Display all recipes
        populateRecipeSelect(recipesData.recipes);
    } else {
        // Filter recipes that contain the selected tag
        const filteredRecipes = recipesData.recipes.filter(recipe => recipe.tags.includes(selectedTag));

        // Populate the recipe select menu with filtered recipes
        populateRecipeSelect(filteredRecipes);
    }

    //refresh the recipes
    displayRecipeDetails()
}

function displayRecipeDetails() {
    const selectedRecipeTitle = recipeSelect.value;

    // Clear previous recipe details
    recipeDetailsDiv.innerHTML = "";

    if (selectedRecipeTitle === "VIEW ALL") {
        const selectedTag = tagSelect.value;

        if (selectedTag === "VIEW ALL") {
            // Display all recipes
            populateRecipeSelect(recipesData.recipes);
            recipesData.recipes.forEach(recipe => displaySingleRecipeDetails(recipe));
        } else {
            // Filter recipes that contain the selected tag
            const filteredRecipes = recipesData.recipes.filter(recipe => recipe.tags.includes(selectedTag));

            // Populate the recipe select menu with filtered recipes
            populateRecipeSelect(filteredRecipes);

            // Display details for the filtered recipes
            filteredRecipes.forEach(recipe => displaySingleRecipeDetails(recipe));
        }
    } else {
        const selectedRecipe = recipesData.recipes.find(recipe => recipe.title === selectedRecipeTitle);
        // Display details for the selected recipe
        displaySingleRecipeDetails(selectedRecipe);
    }
}


function displaySingleRecipeDetails(recipe) {
    // Create HTML elements for recipe details
    const recipeContainerElement = document.createElement("div");
    recipeContainerElement.classList.add("recipe-container");

    const recipeTitleElement = document.createElement("h2");
    recipeTitleElement.textContent = recipe.title;

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
        li.textContent = Object.keys(ingredient)[0] + ": " + Object.values(ingredient)[0];
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
    recipeContainerElement.appendChild(recipeTitleElement);
    recipeContainerElement.appendChild(recipeDescriptionElement);
    recipeContainerElement.appendChild(recipeTagsElement);
    recipeContainerElement.appendChild(recipeIngredientsElement);
    recipeContainerElement.appendChild(recipeMethodElement);

    recipeDetailsDiv.appendChild(recipeContainerElement);
}


loadData();