import { useNavigate } from "react-router-dom";
import { MealCard } from "./MealCard";

const MealList = ({ meal }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      <div className="meal">
        {meal.map((el) => (
          <MealCard key={el.idMeal} {...el} />
        ))}
      </div>
    </>
  );
};

export { MealList };
