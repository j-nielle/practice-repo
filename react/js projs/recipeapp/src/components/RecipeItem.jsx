export default function RecipeItem({ recipe, setRecipeId }) {
  const flexDisplay = "flex flex-row justify-between items-center mt-3";
  const viewBtn =
    "uppercase px-4 py-3 bg-green-600 text-white rounded-sm font-semibold drop-shadow hover:bg-green-700";

  function viewRecipe() {
    setRecipeId(recipe.id);
  }

  return (
    <div className="shadow-md border border-slate-200 p-4">
      <img className="w-fit h-fit" src={recipe.image} alt={recipe.title} />
      <div className="flex flex-col items-center space-y-3 mt-4">
        <p className="font-bold text-center">{recipe.title}</p>
        <button onClick={viewRecipe} className={viewBtn}>
          view
        </button>
      </div>
    </div>
  );
}
