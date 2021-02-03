import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMi, ADD_FILTER, removeFilter, removeMi } from "../../actions";
const Checkbox = (props) => {
  const [mi, setMi] = useState(false);
  //   const emptyList = [];
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMi(!mi);
    if (mi) {
      dispatch(removeFilter({ type: props.type, value: e }));
    } else {
      dispatch(addMi());
      //   emptyList.push(e);
      //   console.log(emptyList);
      dispatch(ADD_FILTER({ type: props.type, value: e }));
    }
  };
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        value={props.name}
        id="flexCheckDefault"
        checked={mi}
        onChange={(e) => handleChange(e.target.value)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {props.name}
      </label>
    </div>
  );
};

export default Checkbox;
