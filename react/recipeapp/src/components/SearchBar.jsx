import { useState, useEffect } from "react";

const apiKey = process.env.SPOON_API_KEY;
const complexSearchURL = process.env.COMPLEX_SEARCH_URL;

export default function SearchBar({ setRecipes }) {
  const [query, setQuery] = useState("cake");

  useEffect(() => {
    async function fetchRecipe() {
      if (!query) return setRecipes([]);
      const res = await fetch(
        `${complexSearchURL}?query=${query}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setRecipes(data.results);
    }
    fetchRecipe();
  }, [query]);

  const formClass =
    "flex flex-row justify-between py-3 px-4 bg-slate-800 rounded drop-shadow m-8";
  const inputClass = "focus:outline-none w-full bg-slate-800 text-white";

  return (
    <div>
      <form className={formClass}>
        <input
          className={inputClass}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          placeholder="Search for a recipe..."
        />
        <p className="contrast-75 brightness-200">✨</p>
      </form>
    </div>
  );
}
