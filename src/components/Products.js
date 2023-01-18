import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate()
  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>

      <nav>
        {/* we should not use forward / in the nested route  */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
