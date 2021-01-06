import React from "react";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { ButtonWrapper, MainCardWrapper, ProductCardWrapper } from "./style.js";
import { ADD_ZOOM } from "../../actions/index.js";
import Added from "../Added/Added.js";
function ProductCard(props) {
    const dispatch = useDispatch()
  return (
    <MainCardWrapper>
        <Link to='phone-zoom' onClick={() => dispatch(ADD_ZOOM(props.name)) }>
      <ProductCardWrapper>
        <img
          src={props.name.img}
          alt=""
        />
        <div className="descriptionWrapper">
          <div className="description">
            <h3>{props.name.title.substring(0,40)}...</h3>
            <p>{props.name.rating}</p>
          </div>
          <div className="price1">
            <p className='mainP'>{props.name.price}</p>
            <p><strike>{props.name.scrathedPrice}</strike></p>
            <p className='off'>{props.name.discount}</p>
          </div>
        </div>
      </ProductCardWrapper>
      </Link>
      <ButtonWrapper>
        <button className='buy1'>Buy Now</button>
        <button className='add'><Added items={props.name}/></button>
      </ButtonWrapper>
      
    </MainCardWrapper>
  );
}

export default ProductCard;
