import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";

// component to display the details of a selected recipe
export default function RecipeDetail({ recipeId }) {
  const [details, setDetails] = useState([]);
  const URL = `https://api.spoonacular.com/recipes/`;
  const apiKey = process.env.SPOON_API_KEY;

  useEffect(() => {
    async function fetchDetails() {
      if (!recipeId) return;
      const res = await fetch(`${URL}${recipeId}/information?apiKey=${apiKey}`);
      const data = await res.json();

      const cleanup = (str) => {
        if (!str) return false;
      
        str = str.toString();
        return str.replace("Instructions", "").replace(/<[^>]*>/g, "").replace(/\./g, ". ");
      };
      

      const selectedProperties = {
        title: data.title,
        readyInMinutes: data.readyInMinutes + " minutes",
        servings: data.servings + " servings",
        instructions: cleanup(data.instructions),
        pricePerServing: "$" + data.pricePerServing,
        ingredients: data.extendedIngredients,
      };

      setDetails(selectedProperties);
    }
    fetchDetails();
  }, [recipeId]);

  return (
    <div>
      <h1 className="uppercase text-xl font-bold">{details.title}</h1>
      <p>{details.readyInMinutes}</p>
      <p>{details.servings}</p>
      <br />
      <p>{details.pricePerServing}</p>
      <br />
      <p>{details.instructions}</p>
      <br />
      <Ingredients ingredients={details.ingredients} />
    </div>
  )
}
