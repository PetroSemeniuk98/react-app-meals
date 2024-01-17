import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  const {
    idCategory: id,
    strCategoryThumb: image,
    strCategory: title,
    strCategoryDescription,
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img className="activator" src={image} alt="img" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{strCategoryDescription.slice(0,100)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${id}`} className="btn">
          Watch Category{" "}
        </Link>
      </div>
    </div>
  );
};

export { CategoryCard };
