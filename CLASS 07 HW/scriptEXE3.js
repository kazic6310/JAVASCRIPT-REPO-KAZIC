fetch('https://dummyjson.com/recipes')
.then(response => response.json())
.then(result => {

// All desserts (????????????????????????????????)
let allDesserts = result.recipes.filter(recipe => recipe.mealType === 'Dessert').map(dessert => dessert.name);;
console.log(allDesserts);

// Get the names of recipes with more than 30 reviews
let highRatedRecipes = result.recipes.filter (recipe => recipe.reviewCount > 30).map(recipe => recipe.name);
console.log(highRatedRecipes);

// All recipes that use Cinnamon as an ingredient
let cinnamonRecipes = result.recipes.filter(recipe => recipe.ingredients.includes('Cinnamon')).map(recipe => recipe.name);
console.log(cinnamonRecipes);

// Recipes that are served as both Lunch and Dinner
let lucnAndDinnerRecipes = result.recipes.filter(recipe =>recipe.mealType.includes('Lunch') && recipe.mealType.includes('Dinner')).map(recipe => recipe.name);
console.log(lucnAndDinnerRecipes);

// The ingredients needed for "Mango Salsa Chicken" dish
let mangoSalsaChicken = result.recipes.find(recipe => recipe.name === 'Mango Salsa Chicken');
let ingredients = mangoSalsaChicken.ingredients;
console.log(ingredients);

});