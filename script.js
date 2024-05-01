document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '995c138f27e74f11ad58f60e4bc506b9'; // Replace 'YOUR_API_KEY' with your actual API key

    // Function to fetch food recipes from the API
    const fetchRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    // Function to display food recipes on the webpage
    const displayRecipes = async () => {
        const recipeSection = document.getElementById('recipe-list');
        recipeSection.innerHTML = '<p>Loading...</p>';

        const recipesData = await fetchRecipes();

        if (recipesData) {
            recipesData.forEach(recipe => {
                const { title, ingredients, instructions } = recipe;
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipe');
                recipeElement.innerHTML = `
                    <h3>${title}</h3>
                    <p><strong>Ingredients:</strong> ${ingredients.join(', ')}</p>
                    <p><strong>Instructions:</strong> ${instructions}</p>
                `;
                recipeSection.appendChild(recipeElement);
            });
        } else {
            recipeSection.innerHTML = '<p>Failed to fetch recipes. Please try again later.</p>';
        }
    };

    // Call the function to display food recipes when the DOM content is loaded
    displayRecipes();
});
