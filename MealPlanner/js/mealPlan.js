class MealPlan {
    constructor(startDay, shoppingDays) {
        this.startDay = startDay;
        this.shoppingDays = shoppingDays;
        this.savedMeals = [];
    }

    generateMealPlan() {
        this.savedMeals = [];

        for (let i = 0; i < this.shoppingDays; i++) {
            const mealNumber = i;
            const weekDay = this.convertToWeekDay(mealNumber);

            // Randomly select a meal from recipes
            const randomMeal = getRandomRecipe();

            // Add the selected meal to the array
            this.savedMeals.push(new savedMeal(i, weekDay, randomMeal));
        }
    }

    refreshMeal(mealNumber) {
        this.savedMeals[mealNumber].meal = getRandomRecipe();
    }

    convertToWeekDay(mealNumber) {
        const startIndex = daysOfWeek.indexOf(this.startDay);
        return daysOfWeek[(startIndex + mealNumber) % 7];
    }

    generateMealTableHTML() {
        var html = `<table><tr><th>Day</th><th>Meal</th><th>Refresh</th></tr>`
        this.savedMeals.forEach(savedMeal => {
            html += savedMeal.generateTableLineHTML();
        });
        html += `</table>`
        return html;
    }

    generateIngredientsTable() {
        // Create a map to store recipes for each ingredient
        const ingredientRecipesMap = new Map();
    
        this.savedMeals.forEach(savedMeal => {
            savedMeal.meal.ingredients.forEach(ingredient => {
                const ingredientName = Object.keys(ingredient)[0];
                const measurement = ingredient[ingredientName];
    
                // Check if the ingredientRecipesMap already has this ingredient
                if (ingredientRecipesMap.has(ingredientName)) {
                    ingredientRecipesMap.get(ingredientName).push({
                        measurement,
                        recipeTitle: savedMeal.meal.title,
                        showIngredient: false  // Flag to indicate whether to show the ingredient name
                    });
                } else {
                    ingredientRecipesMap.set(ingredientName, [{
                        measurement,
                        recipeTitle: savedMeal.meal.title,
                        showIngredient: true  // Show ingredient name on the first occurrence
                    }]);
                }
            });
        });
    
        // Sort the ingredients alphabetically
        const sortedIngredients = Array.from(ingredientRecipesMap.keys()).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    
        // Compose HTML
        let ingredientsTableHtml = "<table><tr><th>Ingredient</th><th>Measurement</th></tr>";
    
        sortedIngredients.forEach(ingredientName => {
            const ingredientInfos = ingredientRecipesMap.get(ingredientName);
    
            ingredientInfos.forEach((info) => {
                ingredientsTableHtml += `<tr onclick="changeBackgroundColor(this)">
                                            <td>${info.showIngredient ? ingredientName : ''}</td>
                                            <td>${info.measurement} <br> (${info.recipeTitle})</td>
                                        </tr>`;
            });
        });
    
        ingredientsTableHtml += "</table>";
    
        return ingredientsTableHtml;
    }
}


class savedMeal {
    constructor(mealNumber, weekDay, meal) {
        this.mealNumber = mealNumber;
        this.weekDay = weekDay;
        this.meal = meal;
    }

    generateTableLineHTML() {
        return `<tr>
                    <td>${this.weekDay}</td>
                    <td><a href="#" onclick="toggleRecipeView(${this.mealNumber})">${this.meal.title}</td>
                    ${`<td><button onclick="refreshMeal(${this.mealNumber})">Refresh</button></td>`}
                </tr>`;
    }
}