import React, {useContext } from "react";
import "./Producto.css";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import AuthContext from "../../../../Context/AuthContext";
import { BiMap } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";

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
        <div className="contenedor-IniciarReserva-titulo-caja">
          <BiMap size={"30"} />
          <p className="contenedor-IniciarReserva-titulo-p">
            Este auto está disponible en {data && data.productos.ciudad.nombre}{" "}
            y tiene una puntuación excelente
          </p>
        </div>
        <div className="contenedor-IniciarReserva-titulo-caja">
          <BsCalendarCheck size={"26"} />
          <p className="contenedor-IniciarReserva-titulo-p">
            Elegi las fechas que necesites tu vehiculo y comenza con la
            aventura!
          </p>
        </div>

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
