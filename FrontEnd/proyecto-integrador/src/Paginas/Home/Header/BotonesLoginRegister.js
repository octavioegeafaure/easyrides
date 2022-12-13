import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";


export const BotonesLoginRegister = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case "/registro":
        return (
            <>
              <Link to="/login">
                <button className="header-derecha-boton sesion">
                  Iniciar Sesión
                </button>
              </Link>
            </>
          );
    case "/login":
        return (
            <>
              <Link to="/registro">
                <button
                  className="header-derecha-boton cuenta"
                >
                  Registrate
                </button>
              </Link>
            </>
          );
  
    default:
        return (
          <>
            <Link to="/login">
              <button className="header-derecha-boton sesion">
                Iniciar Sesión
              </button>
            </Link>
            <Link to="/registro">
              <button className="header-derecha-boton cuenta">
                Registrate
              </button>
            </Link>
          </>
        );
  }
};

export default BotonesLoginRegister;

