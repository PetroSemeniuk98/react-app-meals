import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealId } from "../apiUrl";
import { Preloder } from "../components/Preloder";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getMealId(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className="btn" style={{marginBottom:'1.5rem'}} onClick={goBack}>
        Go Back
      </button>

      {!recipe.idMeal ? (
        <Preloder />
      ) : (
        <div className="recepi">
          <img src={recipe.strMealThumb} alt="foto" />
          <h3>{recipe.strMeal}</h3>

          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "1rem 0 1.5rem" }}>Video Recepi</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}

      <button className="btn" onClick={goBack}>
        Go Back
      </button>
    </>
  );
};

export { Recipe };
