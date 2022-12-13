import React, { useContext } from "react";
import "./Listado.css";
import { CategoriasContext } from "../../../Context/CategoriasContext";
import useFetch from "../../../Hooks/useFetch";
import { Link } from "react-router-dom";
import { DataPaginaProductosContext } from "../../../Context/DataPaginaProductosContext";
import { DataProductosContext } from "../../../Context/DataProductosContext";

const ListadoCategorias = () => {
  // aca consumo el context de data
  // const urlProductos =
  //   "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/productos";
  const urlProductos = "http://localhost:8080/productos";
  const { data } = useFetch(urlProductos);
  const { elegirCategorias } = useContext(CategoriasContext);
  
  const { setElegirDataPaginaProductos } =
    useContext(DataPaginaProductosContext);

  return (
    <div className="cardsProductos">
      {data &&
        data.productos.map((prod) => (
          <>
            {prod.categoria.titulo == elegirCategorias ? (
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
                  <p>{prod.descripcion.substring(0, 100)}...</p>
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
            ) : null}
          </>
        ))}
    </div>
  );
};

export default ListadoCategorias;