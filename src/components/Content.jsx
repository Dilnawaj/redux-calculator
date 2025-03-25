import React from "react";
import { useSelector } from "react-redux";

function Content() {
   const {calculatorValue}=useSelector((state)=>state.calculator)
  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Calculated Result : {calculatorValue}</p>
    </div>
  );
}

export default Content;
