// Replace "YOUR_JSON_FILE_URL" with the actual URL of your JSON file
const recipesJSON = "https://jordan-heath.github.io/MealPlanner/data/Recipes.json";
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const mealPlan = new MealPlan();
var recipes = [];

// Function to load recipes
function loadRecipes() {
    fetch(recipesJSON)
        .then(response => response.json())
        .then(data => {
            data.recipes.forEach(jsonRecipe => {
                var recipe = new Recipe(jsonRecipe.title, jsonRecipe.description, jsonRecipe.tags, jsonRecipe.ingredients, jsonRecipe.method);
                recipes.push(recipe);
            });
        })
        .catch(error => {
            console.error("Error fetching recipes:", error);
            alert("Failed to load recipes. Please try again later.");
        });
}

function getRandomRecipe() {
    return recipes[Math.floor(Math.random() * recipes.length)]
}

// Function to generate a random meal plan
function generateMealPlan() {
    const startDay = document.getElementById("start-day").value;
    const shoppingDays = parseInt(document.getElementById("shopping-days").value, 10);

    if (!startDay || isNaN(shoppingDays) || shoppingDays < 1) {
        alert("Please provide valid inputs.");
        return;
    }

    mealPlan.startDay = startDay;
    mealPlan.shoppingDays = shoppingDays;
    mealPlan.generateMealPlan();

    updatePage();
}

// Function to refresh a specific day's meal
function refreshMeal(dayIndex) {
    mealPlan.refreshMeal(dayIndex);

    updatePage();
}

function updatePage() {
    document.getElementById("meal-plan-table").innerHTML = mealPlan.generateMealTableHTML();
    document.getElementById("ingredients-table").innerHTML = mealPlan.generateIngredientsTable();
}

function toggleRecipeView(mealNumber) {
    mealPlannerForm = document.getElementById("meal-planner-form");
    displayWindow = document.getElementById("displayWindow");
    
    if (mealNumber !== undefined) {
        document.getElementById("recipeView").innerHTML = mealPlan.savedMeals[mealNumber].meal.generateRecipeHTML();
        displayWindow.style.display = "block";
        mealPlannerForm.style.display = "none";
    } else {
        displayWindow.style.display = "none";
        mealPlannerForm.style.display = "block";
    }

    
}

function changeBackgroundColor(row) {
    // Toggle the 'clicked' class to change the background color
    row.classList.toggle('clicked');
}

// Initial load of recipes
loadRecipes();
