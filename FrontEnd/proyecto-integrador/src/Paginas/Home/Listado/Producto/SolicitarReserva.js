import React, {useContext } from "react";
import "./Producto.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import AuthContext from "../../../../Context/AuthContext";

export const SolicitarReserva = () => {
  const { id } = useParams();
  // pasar id a la url de fetch
  // const urlProductos =
  //   "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/productos/" + id;
  const urlProductos = "http://localhost:8080/productos/" + id;
  // const urlPoliticas = "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/politicas/listaPoliticas";
  const { data } = useFetch(urlProductos);
  const { auth } = useContext(AuthContext);
  return (
    <div className="contenedor-IniciarReserva">
      <div>
        <h4 className="contenedor-IniciarReserva-titulo">
          Conseguí lo que necesitás
        </h4>
        <p className="contenedor-IniciarReserva-titulo-p">
          Esta propiedad está en el corazón de{" "}
          {data && data.productos.ciudad.nombre} y tiene una puntuación
          excelente
        </p>
        <p>
          Elegi las fechas que necesites tu vehiculo y comenza con la aventura!
        </p>
        {auth ? (
          <Link to={`/producto/${id}/reservas`}>
            <button className="IniciarReserva-boton">Reserva</button>
          </Link>
        ) : (
          <Link to={`/login`}>
            <button className="IniciarReserva-boton">Reserva</button>
          </Link>
        )}
      </div>
    </div>
  );
};
