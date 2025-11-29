import React from 'react';
import Header from './components/Header'
import Carrusel from "./components/Carrusel";
import Publicidad from './components/Publicidad';
import ProductosRecomendados from './components/ProductosRecomendados';
import CategoriasDestacadas from './components/CategoriasDestacadas';
import CargadoresPortatiles from './components/CargadoresPortatiles';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <Header />
      <Carrusel />
      <Publicidad />
      <ProductosRecomendados />
      <CategoriasDestacadas />
      <CargadoresPortatiles />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
