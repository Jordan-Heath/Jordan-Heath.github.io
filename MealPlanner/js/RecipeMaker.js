const tagsContainer = document.getElementById('tagsContainer');
const ingredientsContainer = document.getElementById('ingredientsContainer');
const methodContainer = document.getElementById('methodContainer');
const recipeForm = document.getElementById('recipeForm');
const jsonOutputField = document.getElementById('jsonOutputField');
const exportButton = document.getElementById("exportButton");

let formData = new FormData(recipeForm);

function addTag() {
    const tagEntry = document.createElement('div');
    tagEntry.classList.add('tagEntry');
    tagEntry.innerHTML = `
        <input type="text" class="tag" placeholder="Tag">
        <button class="removeButton" type="button" onclick="removeEntry(this)">X</button>
    `;
    tagsContainer.appendChild(tagEntry);
}

function addIngredient() {
    const ingredientEntry = document.createElement('div');
    ingredientEntry.classList.add('ingredientEntry');
    ingredientEntry.innerHTML = `
        <input type="text" class="ingredient" placeholder="Ingredient" required>
        <input type="text" class="measurement" placeholder="Measurement" required>
        <button class="removeButton" type="button" onclick="removeEntry(this)">X</button>
    `;
    ingredientsContainer.appendChild(ingredientEntry);
}

function addMethod() {
    const methodEntry = document.createElement('div');
    methodEntry.classList.add('methodEntry');
    methodEntry.innerHTML = `
        <textarea class="method" placeholder="Step" required></textarea>
        <button class="removeButton" type="button" onclick="removeEntry(this)">X</button>
    `;
    methodContainer.appendChild(methodEntry);
}

function removeEntry(button) {
    const entry = button.parentNode;
    entry.parentNode.removeChild(entry);
}

function convertToJson() {
    formData = new FormData(recipeForm);

    const recipe = {
        title: formData.get('title'),
        description: formData.get('description'),
        tags: Array.from(document.querySelectorAll('.tag')).map(tag => tag.value.trim()),
        ingredients: [],
        method: Array.from(document.querySelectorAll('.method')).map(step => step.value.trim()),
    };

    document.querySelectorAll('.ingredientEntry').forEach(entry => {
        const ingredient = entry.querySelector('.ingredient').value;
        const measurement = entry.querySelector('.measurement').value;
        recipe.ingredients.push({ [ingredient]: measurement });
    });
    
    // Clear existing content
    jsonOutputField.value = '';

    // Append new JSON data
    jsonOutputField.value = JSON.stringify({ recipes: [recipe] }, null, 2);
}

function exportJSON() {
    convertToJson()
    const jsonData = jsonOutputField.value;

    if (jsonData) {
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${formData.get('title')}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        alert("No JSON data to export.");
    }
}