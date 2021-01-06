import React  from "react";
import "./Mobile.css";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import Heart from '../Heart/Heart'
import Added from '../Added/Added'
import {Link} from 'react-router-dom'
import { ADD_ZOOM } from "../../actions";
import ProductCard from "../productCard";
const Mobile = () => {
  
  const phone = useSelector((state) => state.phone);

  const dispatch = useDispatch()
  
  return (
    <div className="mobile-items">
      <Filter />

      <div className="eachMobile">
        {phone.map(x => {
          return (
            <ProductCard name={x}/>
          )
        })}
       
      </div>
    </div>
  );
};

export default Mobile;


//
