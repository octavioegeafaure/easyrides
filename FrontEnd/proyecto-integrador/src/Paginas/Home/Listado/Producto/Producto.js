import React, { useEffect, useState, useContext } from "react";
import "./Producto.css";
import { FaShare } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../../Hooks/useFetch";
import CalendarioProducto from "./CalendarioProducto";
import { DataPaginaProductosContext } from "../../../../Context/DataPaginaProductosContext";
import AuthContext from "../../../../Context/AuthContext";
import Politicas from "./Politicas.jsx";


const Producto = () => {
  const { id } = useParams();
  // pasar id a la url de fetch
  // const urlProductos =
  //   "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/productos/" + id;
  const urlProductos = "http://localhost:8080/productos/" + id;
  // const urlPoliticas = "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/politicas/listaPoliticas";
  const urlPoliticas = "http://localhost:8080/politicas/listaPoliticas";
  const { elegirDataPaginaProductos, setElegirDataPaginaProductos } =
    useContext(DataPaginaProductosContext);
  const { data } = useFetch(urlProductos );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <>
        <>
          <header>
            <div className="header-producto">
              <div>
                <h2>{data && data.productos.titulo}</h2>
                <h2></h2>
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
            </div>
          </header>

          {/*Bloque de galeria y informacion*/}

          <section classame="Seccion-Detalle">
            <div className="icons-prod">
              <button>
                <AiFillHeart size={"26"} />
              </button>
              <button>
                <FaShare size={"23"} />
              </button>
            </div>

            <div className="galeriaImg">
              <a href="#img1" className={"img1"}>
                <img
                  src={data && data.productos.imagenes[0].url}
                  alt="Imagen1"
                ></img>
              </a>
              <a href="#img2" className={"img2"}>
                <img
                  src={data && data.productos.imagenes[1].url}
                  alt="Imagen2"
                ></img>
              </a>
              <a href="#img3" className={"img3"}>
                <img
                  src={data && data.productos.imagenes[2].url}
                  alt="Imagen3"
                ></img>
              </a>

              <a href="#img4" className={"img4"}>
                <img
                  src={data && data.productos.imagenes[3].url}
                  alt="Imagen4"
                ></img>
              </a>

              <a href="#img5" className={"img5"}>
                <img
                  src={data && data.productos.imagenes[4].url}
                  alt="Imagen5"
                ></img>
              </a>

              <article className="light-box" id="img1">
                <a href="#img5" className="next">
                  {" "}
                  <i class="fa-solid fa-arrow-left"></i>
                </a>
                <img
                  src={data && data.productos.imagenes[0].url}
                  alt="Imagen1"
                ></img>
                <a href="#img2" className="next">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#" className="close">
                  X
                </a>
              </article>

              <article className="light-box" id="img2">
                <a href="#img1" className="next">
                  {" "}
                  <i class="fa-solid fa-arrow-left"></i>
                </a>
                <img
                  src={data && data.productos.imagenes[1].url}
                  alt="Imagen2"
                ></img>
                <a href="#img3" className="next">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#" className="close">
                  X
                </a>
              </article>

              <article className="light-box" id="img3">
                <a href="#img2" className="next">
                  {" "}
                  <i class="fa-solid fa-arrow-left"></i>
                </a>
                <img
                  src={data && data.productos.imagenes[2].url}
                  alt="Imagen2"
                ></img>
                <a href="#img4" className="next">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#" className="close">
                  X
                </a>
              </article>

              <article className="light-box" id="img4">
                <a href="#img3" className="next">
                  {" "}
                  <i class="fa-solid fa-arrow-left"></i>
                </a>
                <img
                  src={data && data.productos.imagenes[3].url}
                  alt="Imagen2"
                ></img>
                <a href="#img5" className="next">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#" className="close">
                  X
                </a>
              </article>

              <article className="light-box" id="img5">
                <a href="#img4" className="next">
                  {" "}
                  <i class="fa-solid fa-arrow-left"></i>
                </a>
                <img
                  src={data && data.productos.imagenes[4].url}
                  alt="Imagen2"
                ></img>
                <a href="#img1" className="next">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="#" className="close">
                  X
                </a>
              </article>
            </div>

            <article className="cuerpo-contenedor">
              <div className="Seccion1">
                <h2 className="cuerpo-titulo">
                  {data && data.productos.titulo}
                </h2>
                {/* <hr className="cuerpo-linea"/> */}
                <p className="cuerpo-descripcion">
                  {data && data.productos.descripcion}
                </p>
              </div>

              {/* <div className="botones">
                <p>
                  Elegi las fechas que necesites tu vehiculo y comenza con la
                  aventura!
                </p>
                <Link to={`/producto/${id}/reservas`}>
                  <button className="botones-boton">Iniciar Reserva</button>
                </Link>
              </div> */}
            </article>

            <article>
              <div>
                <div className="caracteristicas">
                  <h2 className="caracteristicas-titulo">
                    ¿Qué ofrece este auto?
                  </h2>
                  {data &&
                    data.productos.caracteristicas.map((carac) => (
                      <>
                        <p key={carac.id}>
                          <i class={carac.url}></i> {carac.titulo}{" "}
                        </p>
                      </>
                    ))}
                </div>
              </div>
            </article>

            <article>
              <div>
                <div className="politicas">
                  <h2 className="politicas-titulo">
                  Requisitos para alquilar un carro 
                  </h2>
                  <Politicas></Politicas>
                </div>
              </div>
            </article>

            <article>
              <div>
                <div className="seleccionaFecha">
                  <h2 className="seleccionaFecha-titulo">
                    Seleccioná la fecha de tu reserva
                  </h2>
                  <p className="seleccionaFecha-descripcion">
                    Agregá la fecha de tu viaje para poder obtener los mejores
                    precios.
                  </p>
                </div>
              </div>
            </article>
          </section>

          <div className="reservaProductos">
            <div className="contenedor-calendario">
              <CalendarioProducto />
            </div>

            <div className="contenedor-IniciarReserva">
              <p>
                Elegi las fechas que necesites tu vehiculo y comenza con la
                aventura!
              </p>
              {/* {auth ? ( */}
              <Link to={`/producto/${id}/reservas`}>
                <button className="IniciarReserva-boton">
                  Iniciar Reserva
                </button>
              </Link>
              {/* ) : (
                <Link to={`/login`}>
                  <button className="IniciarReserva-boton">
                    Iniciar Reserva
                  </button>
                </Link> */}
              {/* )} */}
            </div>
          </div>
        </>
      </>
    </div>
  );
};

export default Producto;
