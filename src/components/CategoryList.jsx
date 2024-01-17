import { CategoryCard } from "./CategoryCard";

const CategoryList = ({ catalog = [] }) => {
  return (
    <div className="meal">
      {catalog.map((elem) => (
        <CategoryCard key={elem.idCategory} {...elem} />
      ))}
    </div>
  );
};

export { CategoryList };
