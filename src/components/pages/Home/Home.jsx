import React from "react";
import GridProducts from "./CardProducto/GridProducts"
import Calesita from "./Carousel/Carousel";

const Home = (props) => {
  props.funcNav(true)
  return (
    <div>
      {/* Carousel */}
      <Calesita />
      <GridProducts />
      {/* Products */}
    
    </div>
  );
};

export default Home;