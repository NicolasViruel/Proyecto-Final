import React from "react";
import CardProducto from "./CardProducto/CardProducto";
import Calesita from "./Carousel/Carousel";

const Home = (props) => {
  props.funcNav(true)
  return (
    <div>
      {/* Carousel */}
      <Calesita />
      <CardProducto />
      {/* Products */}
    
    </div>
  );
};

export default Home;