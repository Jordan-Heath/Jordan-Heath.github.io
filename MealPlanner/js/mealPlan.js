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
        const allIngredients = this.savedMeals.flatMap(savedMeal => savedMeal.meal.ingredients);
    
        // Sort the ingredients alphabetically by their names
        const sortedIngredients = allIngredients.slice().sort((a, b) => {
            const ingredientNameA = Object.keys(a)[0].toLowerCase();
            const ingredientNameB = Object.keys(b)[0].toLowerCase();
            return ingredientNameA.localeCompare(ingredientNameB);
        });
    
        let ingredientsTableHtml = "<table><tr><th>Ingredient</th><th>Measurement</th></tr>";
    
        sortedIngredients.forEach(ingredient => {
            const [ingredientName, measurement] = Object.entries(ingredient)[0];
            ingredientsTableHtml += `
                <tr onclick="changeBackgroundColor(this)">
                    <td>${ingredientName}</td>
                    <td>${measurement}</td>
                </tr>
            `;
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
        return `
            <tr>
                <td>${this.weekDay}</td>
                <td><a href="#" onclick="toggleRecipeView(${this.mealNumber})">${this.meal.title}</td>
                ${`<td><button onclick="refreshMeal(${this.mealNumber})">Refresh</button></td>`}
            </tr>
        `;
    }
}