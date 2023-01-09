import React,{useContext} from 'react'
import "./Avatar.css";
import AuthContext from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

export const Avatar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  
  const cerrarSesion = () => {
    setAuth(null)
  }
  return (
    <div className="avatar">
      <Link to="/usuarios/:id/reservas" className="avatar-reservas">
        Mis Reservas
      </Link>
      <p className="avatar-nombre">{auth.nombre}</p>
      <button className="avatar-sesion" onClick={() => cerrarSesion()}>
        Cerrar Sesion
      </button>
    </div>
  );
}
