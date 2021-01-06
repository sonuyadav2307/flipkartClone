import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../actions";

const Added = (props) => {
  const dispatch = useDispatch();

  const kart = useSelector((state) => state.kart);

  const handleClick = () => {
    dispatch(ADD_ITEM(props));
  };

  return (
    <div onClick={() => handleClick()}>
      {kart[props.items.id] !== undefined ? "added" : "add"}
    </div>
  );
};

export default Added;
