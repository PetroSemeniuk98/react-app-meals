import { useEffect, useState } from "react";
import { getAllCategories } from "../apiUrl";
import { CategoryList } from "../components/CategoryList";
import { NotFound } from "./NotFound";
import { Search } from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({ pathname, search: `?search=${str}` });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <div>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <NotFound />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </div>
  );
};

export { Home };
