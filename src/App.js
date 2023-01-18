import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
import Admin from "./components/Admin";
import { AuthProvider } from "./components/auth";
import FeaturedProducts from "./components/FeaturedProducts";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Nomatch from "./components/Nomatch";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Profile from "./components/Profile";
import RequireAuth from "./components/RequireAuth";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
// dynamic import using lazy load
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading .... ">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          {/* for thousands users  */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
