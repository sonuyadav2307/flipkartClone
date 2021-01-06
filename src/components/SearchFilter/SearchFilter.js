import React from "react";
import "./SearchFilter.css";
import { useSelector } from "react-redux";
const SearchFilter = () => {
    const searchBox = useSelector((state) => state.search);
    console.log(searchBox)

  return (
    <div className="MainSearchFilter">
      {searchBox.map((x) => {
        return <input placeholder={x} />;
      })}
    </div>
  );
};

export default SearchFilter;
