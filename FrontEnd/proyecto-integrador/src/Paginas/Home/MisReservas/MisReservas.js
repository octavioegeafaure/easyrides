import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../../Context/AuthContext';
import useFetch from '../../../Hooks/useFetch'
import "./MisReservas.css";
import dayjs from "dayjs";
const MisReservas = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const urlMisReservas = "http://localhost:8080/usuarios/" + auth.id + "/reservas";
  const { data } = useFetch(urlMisReservas);
//localhost:8080/usuarios/1/reservas

 return (
  <div className="misReservas">
    <h2 className="titulo ">Tus Reservas</h2>

    <div>
      {data &&
        data.usuarios.map((prod) => (
          <div className="misReservas-cajaReservas">
            <img src={prod.producto.imagenes[0].url} alt="" />
            <div className="misReservas-cajaReservas-izquierda">
              <p className="misReservas-cajaReservas-categoria">
                {prod.producto.categoria.titulo}
              </p>
              <h3 className="misReservas-cajaReservas-nombre">
                {prod.producto.titulo}
              </h3>
              <p className="ciudad">Ciudad:</p>
              <p className="misReservas-cajaReservas-ciudad">
                {prod.producto.ciudad.nombre}, {prod.producto.ciudad.provincia}
              </p>
            </div>
            <div className="misReservas-cajaReservas-fechas">
              <p className="fechaDeReserva">Fecha de reserva:</p>
              <div className="fechas">
                <p className="misReservas-cajaReservas-fecha">
                  Desde : {dayjs(prod.fechaInicial).format("DD-MM-YYYY")}
                </p>
                <p className="misReservas-cajaReservas-fecha fechaFinal">
                  {" "}
                  a {dayjs(prod.fechaFinal).format("DD-MM-YYYY")}
                </p>
              </div>
            </div>
            <div className="horario">
              <p className="horarioDeReserva">Horario de retiro</p>
              <p>{prod.horaInicio}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
);
}

export default MisReservas