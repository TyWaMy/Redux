import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputs } from "../Redux/Action/action";


function Title({ handlerInputChanger }) {
  const text = useSelector((state) => {
    const { inputReducer } = state;
    return inputReducer.text;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
 
    dispatch(inputs(e.target.value));
    handlerInputChanger(e.target.value);
  };

  return (
    <div className="search">
      <div className="form-group">
        <input
          className="input"
          type="text"
          id="dynamic-label-input"
          placeholder="Enter some text"
          onChange={handleChange}
          value={text}
        />
      </div>
    </div>
  );
}

export default Title;