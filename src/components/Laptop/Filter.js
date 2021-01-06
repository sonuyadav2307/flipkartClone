import React, { useState } from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { addMi, ADD_FILTER, removeMi } from "../../actions";
import Checkbox from '../checkbox/checkbox'
import Slider from '@material-ui/core/Slider';
const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([0, 100000]);
 const updateRange = (e, val) =>{
   setValue(val)
 }

  return (
    <div className="filter-items">
      <div className="container1">
        <div className="filter-inside">
          <h3 className="filter">Filter</h3>
          <p>Min: {value[0]}</p>
          <Slider 
          value={value}
          max ={100000}
          onChange={updateRange}
          />
          <p>Max: {value[1]}</p>
        </div>
        <div className="border1"></div>
        <div className="filter-inside">
          <h3 className="filter">Brands</h3>
          <div className="form-check">
           
            <Checkbox name={'dell'} type='categary' />
            <Checkbox name={'lenovo'} type='categary' />
            <Checkbox name={'macbook'} type='categary'  />
          </div>
        </div>
        <div className="border1"></div>
        <div className="filter-inside">
          <h3 className="filter">RAM</h3>
          <div className="form-check">
           
            <Checkbox name={'8 gb'} type='ram' />
            <Checkbox name={'4 gb'} type='ram' />
          </div>
        </div>
        <div className="border1"></div>
        
      </div>
    </div>
  );
};

export default Filter;
