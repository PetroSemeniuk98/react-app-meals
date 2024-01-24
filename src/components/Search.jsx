import { useState } from "react";
// import { getAllCategories } from "../apiUrl";

const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    cb(value);
  };
  
  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          onKeyDown={handleKey}
          placeholder="Search..."
        />
      <button
        className="btn"
        onClick={handleSubmit}
        style={{ position: "absolute", top: 0, right: 10 }}
      >
        Submit
      </button>
      </div>
    </div>
  );
};

export { Search };
