import React from "react";
import Meal from "./components/Meal";
import "./components/style.css";
import Recipe from "./components/Recipe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
