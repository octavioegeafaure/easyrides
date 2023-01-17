import React, { useEffect, useState, useContext } from "react";
import "./Producto.css";
import { FaShare, } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import CalendarioProducto from "./CalendarioProducto";
import { DataPaginaProductosContext } from "../../../../Context/DataPaginaProductosContext";
import AuthContext from "../../../../Context/AuthContext";
import Politicas from "./Politicas.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { SolicitarReserva } from "./SolicitarReserva";

const Producto = () => {
  
  const { id } = useParams();
  // pasar id a la url de fetch
  // const urlProductos =
  //   "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/productos/" + id;
  const urlProductos = "http://localhost:8080/productos/" + id;
  // const urlPoliticas = "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/politicas/listaPoliticas";
  const urlPoliticas = "http://localhost:8080/politicas";
  const { elegirDataPaginaProductos, setElegirDataPaginaProductos } =
    useContext(DataPaginaProductosContext);
  const { data } = useFetch(urlProductos );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div>
      <div>
        <div className="header-producto">
          <div>
            <h2>{data && data.productos.titulo}</h2>
          </div>
          <Link to="/">
            <button className="boton-volver">
              <MdOutlineArrowBackIos size={"30"} />
              
            </button>
          </Link>
        </div>
        <div className="ubicacion">
          <div className="localidad">
            <p>
              {data && data.productos.ciudad.nombre},{" "}
              {data && data.productos.ciudad.provincia},{" "}
              {data && data.productos.ciudad.pais}
            </p>
          </div>
          <div className="icons-prod">
            <div>
              <button>
                <FaShare size={"23"} />
                <p>Compartir</p>
              </button>
            </div>
            <div>
              <button>
                <AiFillHeart size={"26"} />
                <p>Guardar</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Bloque de galeria y informacion*/}

      <div className="galeriaImg">
        <div>

         <Carousel  className="imagen">
          <div>
            <img src={data && data.productos.imagenes[0].url} alt="Imagen1" />
          </div>
          <div>
            <img src={data && data.productos.imagenes[1].url} />
          </div>
          <div>
            <img src={data && data.productos.imagenes[2].url} />
          </div>
          <div>
            <img src={data && data.productos.imagenes[3].url} />
          </div>
          <div>
            <img src={data && data.productos.imagenes[4].url} />
          </div>
        </Carousel>
 
        <div className="cuerpo-contenedor">
          <div className="Seccion1">
            <h2 className="cuerpo-titulo">{data && data.productos.titulo}</h2>
            {/* <hr className="cuerpo-linea"/> */}
            <p className="cuerpo-descripcion">
              {data && data.productos.descripcion}
            </p>
          </div>
          </div>
          <div className="caracteristicas">
            <h2 className="caracteristicas-titulo">¿Qué ofrece este auto?</h2>
            {data &&
              data.productos.caracteristicas.map((carac) => (
                <>
                  <p key={carac.id}>
                    <i class={carac.url}></i> {carac.titulo}
                  </p>
                </>
              ))}
          </div>
          <div className="politicas">
            <h2 className="politicas-titulo">Requisitos para alquilar un carro</h2>
            <Politicas />
          </div>      
        <div>
        <div className="seleccionaFecha">
          <h2 className="seleccionaFecha-titulo">
            Seleccioná la fecha de tu reserva
          </h2>
          <p className="seleccionaFecha-descripcion">
            Agregá la fecha de tu viaje para poder obtener los mejores precios.
          </p>
        </div>
        <div className="contenedor-calendario"></div>
        <CalendarioProducto />
        </div>
        </div>
        <SolicitarReserva />
      </div>
      
      <div>
      </div>


      <div />
      
    </div>
  );
};

export default Producto;
           