import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate() // returns a function

  return (
    <>
      <h1>I am Home Page</h1>
      <button onClick={()=> navigate('/order-summary')}>Place Order</button>
    </>
  );
};

export default Home;
