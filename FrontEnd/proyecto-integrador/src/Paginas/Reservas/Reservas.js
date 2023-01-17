import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import Calendario from "../Home/Buscador/Calendario";
import "./Reservas.css";
import { FechasParaReservaContext } from "../../Context/FechasParaReservaContext";
import CalendarioProducto from "../Home/Listado/Producto/CalendarioProducto";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../../Context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from "react-select";

const Reservas = () => {
  const { id } = useParams();
  // pasar id a la url de fetch
  const urlProductos = "http://localhost:8080/productos/" + id;
  const urlReservas = "http://localhost:8080/reservas";
  const { data } = useFetch(urlProductos);
  // const { fechasCalendario } = useContext( FechasCalendarioContext )
  const { auth, setAuth } = useContext(AuthContext);
  const { fechaInicio, setFechaInicio } = useContext(FechasParaReservaContext);
  const { fechaFin, setFechaFin } = useContext(FechasParaReservaContext);
  const [submitForm, setSubmitForm] = useState(false);
  const [ elegirHorario, setElegirHorario ] = useState()
  const [usuarioEligeSelect, setUsuarioEligeSelect] = useState(false);
  const [errorSelect, setErrorSelect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const valoresHorarios = [
    { label: "8:00 a 12:00", value: "8:00 a 12:00" },
    { label: "12:00 a 16:00", value: "12:00 a 16:00" },
    { label: "16:00 a 20:00", value: "16:00 a 20:00" },
  ];
  const infoPostReserva = {
    horaInicio: elegirHorario,
    fechaInicial: fechaInicio,
    fechaFinal: fechaFin,
    producto: {
      id: id,
    },
    usuario: {
      id: auth.id,
    },
  };
  const postReserva = (objetoUsuario) => {
    axios({
      method: "post",
      url: urlReservas,
      data: objetoUsuario,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        navigate("/producto/:id/reservas/ok");
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const handleHorarios = (event) => {
    setElegirHorario(event.value)
    setUsuarioEligeSelect(true)
  };
  return (
    <div className="reserva">
      <h2>Solicitá tu reserva</h2>
      {console.log(usuarioEligeSelect)}
      <div className="reserva-superior">
        <div className="reserva-estatic">
          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              email: "",
              ciudad: "",
            }}

          >
            {({values }) => (
              <Form className="reserva-superior-formulario">
                <div className="reserva-superior-formulario-linea1">
                  <p>Nombre</p>
                  <Field
                    type="text"
                    name="nombre"
                    placeholder={auth ? auth.nombre : null}
                    id="nombre"
                    readonly="readonly"
                  />

                  <p>Correo electrónico</p>
                  <Field
                    type="email"
                    name="email"
                    placeholder={auth ? auth.email : null}
                    id="email"
                    readonly="readonly"
                  />
                </div>

                <div className="reserva-superior-formulario-linea2">
                  <p>Apellido</p>
                  <Field
                    type="text"
                    name="apellido"
                    placeholder={auth ? auth.apellido : null}
                    id="apellido"
                    readonly="readonly"
                  />

                  <p>Ciudad</p>
                  <Field
                    type="text"
                    name="ciudad"
                    placeholder="Ingresa la ciudad de retiro"
                    id="ciudad"
                    readonly="readonly"
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div className="reserva-horario">
            <h2>Elegí tu horario de llegada</h2>
            <p>Indica tu horario estimado de llegada</p>
            <div className="reserva-horario-select">
              <Select
                defaultValue={{ label: "Elegí tu horario" }}
                options={valoresHorarios}
                onChange={handleHorarios}
              />
              {errorSelect && usuarioEligeSelect === false ? (
                <p className="reserva-horario-select-error">
                  Seleccioná un horario
                </p>
              ) : null}
            </div>
          </div>
          <div className="reserva-inferior">
            <h2 className="reserva-inferior-titulo">
              Seleccioná la fecha de tu reserva
            </h2>
            <p>
              Agregá la fecha de tu viaje para poder obtener los mejores
              precios.
            </p>
            <CalendarioProducto />
          </div>
        </div>
        <div className="reserva-superior-detalle">
          <div className="reserva-superior-detalle-top">
            <img
              className="reserva-superior-imagen"
              src={data && data.productos.imagenes[0].url}
              alt="Imagen1"
            />
            <div className="reserva-superior-descripcion">
              <h3 className="reserva-superior-nombre">
                {data && data.productos.titulo}
              </h3>
              <p>
                {data && data.productos.ciudad.nombre},{" "}
                {data && data.productos.ciudad.provincia}
              </p>
            </div>
          </div>
          <div className="reserva-superior-calendario">
            <p>Fecha seleccionada</p>
            <Calendario />

            <button
              className="reserva-superior-calendario-boton"
              onClick={() => {
                usuarioEligeSelect
                  ? postReserva(JSON.stringify(infoPostReserva))
                  : setErrorSelect(true);
              }}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservas;
