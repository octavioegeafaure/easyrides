import React, { useContext } from "react";
import "./Avatar.css";
import AuthContext from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

export const AvatarAdmin = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const cerrarSesion = () => {
    setAuth(null);
  };
  return (
    <div className="avatar">
      <Link to="/usuarios/:id/reservas" className="avatar-reservas">
        Mis Reservas
      </Link>
      <Link to="/admin" className="avatar-nombre">
        Administrador
      </Link>
      <button className="avatar-sesion" onClick={() => cerrarSesion()}>
        Cerrar Sesion
      </button>
    </div>
  );
};
