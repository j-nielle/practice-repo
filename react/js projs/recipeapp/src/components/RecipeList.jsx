import RecipeItem from "./RecipeItem";

// component to display the list of recipes based on search results
export default function RecipeList({ recipes, setRecipeId }) {
  const gridDisplay =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-8";

  return (
    <div className={gridDisplay}>
      {recipes.map((recipe) => (
        <RecipeItem setRecipeId={setRecipeId} key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
