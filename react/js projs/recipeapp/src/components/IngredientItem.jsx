export default function IngredientItem({ ingredient, index }) {
  return (
    <>
      <img
        className="w-10 h-10"
        src={`https://spoonacular.com/cdn/ingredients_100x100/${
          ingredient.image ?? "no.jpg"
        }`}
        alt=""
      />
      <p className="text-sm" key={index}>{ingredient.name}</p>
    </>
  );
}
