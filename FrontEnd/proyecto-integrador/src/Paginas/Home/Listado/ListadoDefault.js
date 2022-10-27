import "./Listado.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import { DataPaginaProductosContext } from "../../../Context/DataPaginaProductosContext";
import { CategoriasContext } from "../../../Context/CategoriasContext";


const ListadoDefault = () => {
  const urlProductos = "http://localhost:8080/productos";
  const { data } = useFetch(urlProductos);
  const { elegirCategorias } = useContext(CategoriasContext);
  const { setElegirDataPaginaProductos } = useContext(
    DataPaginaProductosContext
  );

  return (
    <div className="cardsProductos">
      {data &&
        data.productos.map((prod) => (
          <>
          <Link
                onClick={() => {
                  setElegirDataPaginaProductos(prod.id);
                }}
                to={`/producto/${prod.id}`}
              >
            <div className="listado-unidad" key={prod.id}>
              
              <img
                src={prod.imagenes[0].url}
                alt=""
                className="cardsProductos-unidad-img"
                key={prod.id}
              />
              <h2 className="listado-unidad-nombre">{prod.titulo}</h2>
              <p className="cardsProductos-unidad-descripcion">
                {prod.ciudad.nombre + ", " + prod.ciudad.provincia}
              </p>
              <div className="card-caracteristicas">
                {prod.caracteristicas.map((carac) => {
                  return (
                    <p key={carac.id}>
                      <i class={carac.url}></i>
                    </p>
                  );
                })}
              </div>
              
                
              
            </div>
            </Link>
          </>
        ))}
    </div>
  );
};

export default ListadoDefault;
