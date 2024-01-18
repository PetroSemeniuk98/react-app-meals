import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../apiUrl";
import { Preloder } from "../components/Preloder";
import { MealList } from "../components/MealList";

const Category = () => {
  const { name } = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeal(data.meals));
  }, [name]);

  return <>{!meal.length ? <Preloder /> : <MealList meal={meal} />}</>;
};

export { Category };
