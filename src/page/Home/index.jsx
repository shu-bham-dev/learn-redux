import React from "react";
import AddCart from "../AddCart";
import { useSelector } from "react-redux";

const Home = () => {
  const cartItems = useSelector(store=>store.cart.items)
  return <div>
    Number of click - {cartItems.length}
    <AddCart/>
  </div>;
};

export default Home;
