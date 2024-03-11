import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import OuterContainer from "./components/OuterContainer";
import InnerContainer from "./components/InnerContainer";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipeId, setRecipeId] = useState("");

  return (
    <div className="App">
      <SearchBar setRecipes={setRecipes} />
      {recipeId && recipes.length > 0 ? (
        <OuterContainer>
          <InnerContainer>
            <RecipeList recipes={recipes} setRecipeId={setRecipeId} />
          </InnerContainer>
          <InnerContainer>
            <RecipeDetail recipeId={recipeId} />
          </InnerContainer>
        </OuterContainer>
      ) : (
        <RecipeList recipes={recipes} setRecipeId={setRecipeId} />
      )}
    </div>
  );
}
