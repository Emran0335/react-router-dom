import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const gobackNavigateFunc = useNavigate();
  // console.log(gobackNavigateFunc(-1)); // -1 indicates that it should move backwards one step in the navigation history
  return (
    <>
      <div>Order confirmed!</div>
      <div>
        <button onClick={() => gobackNavigateFunc(-1)}>Go back</button>
      </div>
    </>
  );
};

export default OrderSummary;
