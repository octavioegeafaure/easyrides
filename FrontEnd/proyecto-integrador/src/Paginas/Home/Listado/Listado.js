import "./Listado.css";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../Hooks/useFetch";
import ListadoCiudades from "./ListadoCiudades";
import ListadoCategorias from "./ListadoCategorias";
import { DataProductosContext } from "../../../Context/DataProductosContext";
import { MostrarCategoriasContext } from "../../../Context/MostrarCategoriasContext";
import { DataPaginaProductosContext } from "../../../Context/DataPaginaProductosContext";
import ListadoFechas from "./ListadoFechas";
import { FechasParaReservaContext } from "../../../Context/FechasParaReservaContext";
import ListadoDefault from "./ListadoDefault";

export default function Listado() {

  // const urlProductos = "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/productos";
  const urlProductos = "http://localhost:8080/productos";

  const { data } = useFetch(urlProductos);
  const { setDataProductos, dataProductos } = useContext(DataProductosContext);
  const { mostrarCategorias, setMostrarCategorias } = useContext(MostrarCategoriasContext);
  const { elegirDataPaginaProductos, setElegirDataPaginaProductos } = useContext(DataPaginaProductosContext)
  const { fechaInicio, setFechaInicio } = useContext(FechasParaReservaContext);

  return (
    <div className="listado-container">
      <p className="cardsProductos-titulo">
        Vehículos con las mejores calificaciones
      </p>
      <h4 className="cardsCategoria-subtitulo">
        Los clientes están de acuerdo: estos vehículos tienen excelentes
        calificaciones por su calidad y precio, entre otros aspectos.
      </h4>
      <div>
        {/* // if comun si a es verdadero y b y c es false va a y ciudades */}
        {(() => {
          if (!mostrarCategorias && !dataProductos) {
            return <ListadoDefault />;
          } else if (dataProductos) {
            return <ListadoCiudades />;
          } else if (dataProductos) {
            return <ListadoFechas />;
          } else if (mostrarCategorias) {
            return <ListadoCategorias />;
          }
        })()}
      </div>
    </div>
  );
}
