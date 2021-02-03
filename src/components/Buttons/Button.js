import React from "react";
import { useDispatch } from "react-redux";
import { removeKart } from "../../actions";
import "./Button.css";
const Button = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(removeKart(props.type))}
        className="buttonKart"
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
