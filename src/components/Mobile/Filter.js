import React, { useState } from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";

import Checkbox from "../checkbox/checkbox";
import Slider from "@material-ui/core/Slider";
import { addRange } from "../../actions";

const initialState = {
  brand: ["Mi", "Real Me", "Samsung"],
  ram: ["2 Gb", "3 Gb", "4 Gb"],
};

const Filter = () => {
  const [value, setValue] = useState([0, 100000]);
  const dispatch = useDispatch();
  const updateRange = (e, val) => {
    setValue(val);

    dispatch(addRange(val));
  };

  return (
    <div className="filter-items">
      <div className="container1">
        <div className="filter-inside">
          <h3 className="filter">Filter</h3>
          <p>Min: {value[0]}</p>
          <Slider
            value={value}
            max={100000}
            onChange={(e, val) => updateRange(e, val)}
          />
          <p>Max: {value[1]}</p>
        </div>
        <div className="border1"></div>
        <div className="filter-inside">
          <h3 className="filter">Brands</h3>
          <div className="form-check">
            <Checkbox name={"mi"} type="categary" />
            <Checkbox name={"realme"} type="categary" />
            <Checkbox name={"apple"} type="categary" />
          </div>
        </div>
        <div className="border1"></div>
        <div className="filter-inside">
          <h3 className="filter">RAM</h3>
          <div className="form-check">
            <Checkbox name={"2 gb"} type="ram" />
            <Checkbox name={"3 gb"} type="ram" />
            <Checkbox name={"4 gb"} type="ram" />
          </div>
        </div>
        <div className="border1"></div>
      </div>
    </div>
  );
};

export default Filter;
