import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculatorAction } from "../store/calculator";

function Operation() {
  const [value, setValue] = useState({
    first: "",
    second: "",
  });

  const handleChange = (e, type) => {
    setValue({ ...value, [type]: e.target.value });
  };
  const dispatch = useDispatch();
  const resetData = () => {
    setValue({
      first: "",
      second: "",
    });
  };

  const handleAdd = () => {
    dispatch(
      calculatorAction.add({
        first: value.first,
        second: value.second,
      })
    ),
      resetData();
  };
  const handleSubtract = () => {
    dispatch(
      calculatorAction.subtract({
        first: value.first,
        second: value.second,
      })
    ),
      resetData();
  };
  const handleMultiply = () => {
    dispatch(
      calculatorAction.multiply({
        first: value.first,
        second: value.second,
      })
    ),
      resetData();
  };
  const handleDivide = () => {
    dispatch(
      calculatorAction.divide({
        first: value.first,
        second: value.second,
      })
    ),
      resetData();
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center buttons">
        <input
          type="text"
          name="first"
          value={value.first}
          onChange={(e) => handleChange(e, "first")}
          className="number-input"
          placeholder="enter 1st value"
        />
        <input
          type="text"
          name="second"
          value={value.second}
          onChange={(e) => handleChange(e, "second")}
          className="number-input"
          placeholder="enter 2nd value"
        />
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center buttons">
        <button
          type="button"
          onClick={handleAdd}
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleSubtract}
          className="btn btn-secondary btn-lg px-4 gap-3"
        >
          Subtract
        </button>
        <button
          type="button"
          onClick={handleMultiply}
          className="btn btn-danger btn-lg px-4 gap-3"
        >
          Multiply
        </button>

        <button
          type="button"
          onClick={handleDivide}
          className="btn btn-warning btn-lg px-4 gap-3"
        >
          Divide
        </button>
      </div>
    </>
  );
}

export default Operation;
