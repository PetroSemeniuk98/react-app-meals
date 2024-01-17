import { useEffect, useState } from "react";
import { getAllCategories } from "../apiUrl";
import { CategoryList } from "../components/CategoryList";

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return <div>{!catalog.length ? "" : <CategoryList catalog={catalog} />}</div>;
};

export { Home };
