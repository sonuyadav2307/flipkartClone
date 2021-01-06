import React from 'react'
import './Laptop.css'
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import Heart from '../Heart/Heart'
import Added from '../Added/Added'
import {Link} from 'react-router-dom'
import { ADD_ZOOM } from "../../actions";
import ProductCard from '../productCard';

const Laptop = () => {
    const laptop = useSelector((state) => state.laptop);
    const dispatch = useDispatch()
    return (
    <div className="mobile-items">
      <Filter />

      <div className="eachMobile">
        {laptop.map(x => {
          return (
            <ProductCard name={x}/>
          )
        })}
       
      </div>
    </div>
  );
}

export default Laptop
