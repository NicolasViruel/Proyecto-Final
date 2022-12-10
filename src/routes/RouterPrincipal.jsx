import React from "react";
import CreacionProducto from "../components/pages/CreacionProducto"
import EdicionProducto from "../components/pages/EdicionProducto"
import Error404 from "../components/pages/Error404"
import Contacto from "../components/pages/Contacto"
import Home from "../components/pages/Home"
import RecPassword from "../components/pages/RecPassword"
import TablaProducto from "../components/pages/TablaProducto"
import { Route, Routes } from 'react-router-dom';
import ProductPage from "../components/pages/ProductPage";
import Destacados from "../components/pages/Destacados";
import Favorito from "../components/pages/Favorito";


const RouterPrincipal = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recpassword" element={<RecPassword />} />
        <Route exact path="/tablaproducto" element={<TablaProducto />} />
        <Route exact path="/creacionproducto" element={<CreacionProducto />} />
        <Route exact path="/edicionproducto" element={<EdicionProducto />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/productpage" element={<ProductPage />} />
        <Route exact path="/destacados" element={<Destacados />} />
        <Route exact path="/favoritos" element={<Favorito />} />
        <Route exact path="*" element={<Error404 />} />
      </Routes>
  );
};

export default RouterPrincipal;