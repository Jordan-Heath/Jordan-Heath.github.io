// Replace "YOUR_JSON_FILE_URL" with the actual URL of your JSON file
const recipesJSON = "https://jordan-heath.github.io/MealPlanner/data/recipes.json";


fetch(recipesJSON)
    .then(response => response.json())
    .then(data => {
        // Access the "recipes" array from the JSON data
        const recipes = data.recipes;

        // Create HTML to display recipe details
        const recipesHtml = recipes.map(recipe => {
            return `
                <div>
                    <h2>${recipe.title}</h2>
                    <p>${recipe.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${Object.keys(ingredient)[0]}: ${ingredient[Object.keys(ingredient)[0]]}</li>`).join('')}
                    </ul>
                    <h3>Method:</h3>
                    <ol>
                        ${recipe.method.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            `;
        }).join('');

        // Display the recipe details in the container
        document.getElementById("recipes-container").innerHTML = recipesHtml;
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
        document.getElementById("recipes-container").innerText = "Error fetching JSON";
    });