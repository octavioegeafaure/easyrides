import React, {useContext} from 'react'
import { CiudadesContext } from "../../../Context/CiudadesContext";
import useFetch from '../../../Hooks/useFetch';
import { Link } from "react-router-dom";
import Listado from './Listado';
import { DataProductosContext } from '../../../Context/DataProductosContext';

const ListadoCiudades = () => {
  // aca consumo el context de data
    const urlProductos = "http://localhost:8080/productos";
    const { data } = useFetch(urlProductos);
    const { elegirCiudades } = useContext(CiudadesContext);
    const {dataProductos, setDataProductos} = useContext(DataProductosContext);


    return (
      <div className="cardsProductos">
        {data &&
          data.productos.map((prod) => (
            <>
              {prod.ciudad.nombre === elegirCiudades ? (
                <div key={prod.id} className="cardsProductos-unidad">
                  <img
                    src={prod.imagenes[0].url}
                    alt=""
                    className="cardsProductos-unidad-img"
                  />
                  <h2 className="cardsProductos-unidad-nombre">
                    {prod.titulo}
                  </h2>
                  <p className="cardsProductos-unidad-descripcion">
                    {prod.descripcion}
                  </p>
                  <Link to="/producto">
                    <button className="cardsProductos-unidad-boton">
                      Ver Más
                    </button>
                  </Link>
                </div>
              ) : null}
            </>
          ))}
      </div>
    );
}

export default ListadoCiudades