import IngredientItem from "./IngredientItem";

export default function Ingredients({ ingredients }) {
  return (
    <div className="grid grid-cols-4 gap-y-5 gap-x-6 justify-items-stretch items-stretch">
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <div key={index}>
            <IngredientItem ingredient={ingredient} index={index} />
          </div>
        ))}
    </div>
  );
}
