import React, { useEffect } from 'react'
import Buscador from './Buscador/Buscador'
import Cards from './Categorias/Cards'
import Listado  from './Listado/Listado'


export const Home = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Buscador />
      <Cards />
      <Listado />
    </div>
  );
}
