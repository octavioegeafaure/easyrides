import "./Registro.css";
import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import { useInitialState } from "../../Hooks/useInitialState";
import axios from "axios";

function Registro() {
  const { valores, setValores } = useContext(AppContext);
  const navigate = useNavigate();
  // const urlRegistro =
  //   "http://ec2-3-145-197-27.us-east-2.compute.amazonaws.com:8080/auth/register";
  const urlRegistro = "http://localhost:8080/auth/register";
  //validacion contraseña
  const validarContraseña = (values) => {
    let error = "";
    const regexContraseña = /^.{4,12}$/;
    if (!values) {
      error = "Campo requerido";
    } else if (values.length < 8) {
      error = "La contraseña debe tener de 4 a 12 caracteres.";
    } else if (!regexContraseña.test(values)) {
      error = "Contraseña invalida. No cumple con los requisitos.";
    }
    return error;
  };

  //validacion confirmar contraseña
  const validateConfirmarContraseña = (pass, value) => {
    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "Las contraseñas no coinciden";
      }
    }
    return error;
  };
  const postRegistro = (objetoUsuario) => {
    axios({
      method: "post",
      url: urlRegistro,
      data: objetoUsuario,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          ciudad: "cordoba",
          confirmarContraseña: "",
        }}
        onSubmit={(values) => {
          delete values.confirmarContraseña;
          postRegistro(JSON.stringify(values));
          console.log(values);
          setValores(values);
          navigate("/login");
        }}
        validate={(valores) => {
          let errores = {};

          //validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingrese su nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre =
              "El nombre solo puede contener letras y espacios, pueden llevar acentos.";
          }

          //validacion apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor ingrese su apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.apellido =
              "El apellido solo puede contener letras y espacios, pueden llevar acentos.";
          }

          //validacion correo
          if (!valores.email) {
            errores.email = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
          }

          return errores;
        }}
      >
        {({ errors, values }) => (
          <div className="contenedor">
            <Form className="formulario">
              <h4 className="Titulo-Login">Registráte</h4>
              <div className="seccion1">
                <div className="form-nombre">
                  <label htmlFor="nombre">Nombre</label>
                  <Field type="text" name="nombre" placeholder="" id="nombre" />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="error">{errors.nombre}</div>
                    )}
                  />
                </div>

                <div className="form-apellido">
                  <label htmlFor="apellido">Apellido</label>
                  <Field
                    type="text"
                    name="apellido"
                    placeholder=""
                    id="apellido"
                  />
                  <ErrorMessage
                    name="apellido"
                    component={() => (
                      <div className="error">{errors.apellido}</div>
                    )}
                  />
                </div>
              </div>

              <div className="seccion2">
                <div className="form-correo">
                  <label htmlFor="correo electrónico">Correo electrónico</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Ej: correo@correo.com"
                    id="email"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div className="error">{errors.email}</div>
                    )}
                  />

                  <div className="form-contraseña">
                    <label htmlFor="contraseña">Contraseña</label>
                    <Field
                      type="password"
                      name="password"
                      validate={validarContraseña}
                    />
                  </div>

                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="error">{errors.password}</div>
                    )}
                  />

                  <div className="form-contraseña">
                    <label htmlFor="contraseña2">Confirmar contraseña</label>
                    <Field
                      type="password"
                      name="confirmarContraseña"
                      validate={(value) =>
                        validateConfirmarContraseña(values.password, value)
                      }
                    />
                    <ErrorMessage
                      name="confirmarContraseña"
                      component={() => (
                        <div className="error">
                          {errors.confirmarContraseña}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="Buttom">
                <button type="submit">Crear cuenta</button>
                <p className="ParrafoTienesCuenta">
                  {" "}
                  ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
                </p>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
  
}

export default Registro;
