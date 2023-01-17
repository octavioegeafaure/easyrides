import React, { useContext, useEffect, useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-calendar/dist/Calendar.css";
import "./Calendario.css";
import { FechasParaReservaContext } from "../../../Context/FechasParaReservaContext";
import { FechasCalendarioPersistenciaContext } from "../../../Context/FechasCalendarioPersistenciaContext";
import dayjs from "dayjs";


function Calendario() {
  
  // context global para fechas
  const { fechaInicio, setFechaInicio } = useContext(FechasParaReservaContext);
  const { fechaFin, setFechaFin } = useContext(FechasParaReservaContext);
  const { fechasCalendarioPersistencia, setFechasCalendarioPersistencia } =
    useContext(FechasCalendarioPersistenciaContext);
  
  // const [value, onChange] = useState([new Date(), new Date()]);
    
     
    
      
  return (
    <div className="calendario">
      <div className="calendario-check">
        <p className="calendario-check-p-in">CHECK-IN</p>
        <p className="calendario-check-p-out">CHECK-OUT</p>
      </div>

      <DateRangePicker
        onChange={setFechasCalendarioPersistencia}
        value={fechasCalendarioPersistencia}
        minDate={new Date()}
        clearIcon={null}
      />
      {setFechaInicio(
        dayjs(fechasCalendarioPersistencia[0]).format("YYYY-MM-DD")
      )}
      {setFechaFin(dayjs(fechasCalendarioPersistencia[1]).format("YYYY-MM-DD"))}
    </div>
  );

}

export default Calendario;
