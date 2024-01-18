import { Link } from "react-router-dom";

const MealCard = (props) => {
  const { strMealThumb, idMeal: id, strMeal } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img className="activator" src={strMealThumb} alt="img" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {strMeal}
        </span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">
          Watch Meal{" "}
        </Link>
      </div>
    </div>
  );
};

export { MealCard };
