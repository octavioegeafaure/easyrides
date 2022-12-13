import React, { useContext } from 'react'
import "./Administrador.css"
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useFetch from '../../../Hooks/useFetch';
import AuthContext from '../../../Context/AuthContext';




function Administrador(){

  const navigate = useNavigate();
  // const { tokenUsuario, setTokenUsuario } = useContext(TokenUsuarioContext);

  const { auth, setAuth } = useContext(AuthContext);
  const urlCrearProducto = "http://localhost:8080/productos";
  const urlCiudades = "http://localhost:8080/ciudades";
  const urlCategorias = "http://localhost:8080/categorias";
  const urlCaracteristicas = "http://localhost:8080/caracteristicas";
  
  const { data } = useFetch(urlCiudades);
  const { data: dataCategorias } = useFetch(urlCategorias)
  const { data: dataCaracteristicas } = useFetch(urlCaracteristicas); 
  


  const crearProducto = (objetoUsuario) => {
    axios({
      method: "post",
      url: urlCrearProducto,
      data: objetoUsuario,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        navigate("/");
      })
      .catch(function (response) {
        console.log(response);
        
        //handle error
      });
  };  

    // perdon dani se que es un asco pero es lo que hay
    const caracteristicas0 = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[0]]
    const caracteristicas0Titulo = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[0].titulo]
    const caracteristicas0Id = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[0].id]
    const caracteristicas1 = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[1]]
    const caracteristicas1Titulo = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[1].titulo]
    const caracteristicas1Id = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[1].id]
    const caracteristicas2 = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[2]]
    const caracteristicas2Titulo = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[2].titulo]
    const caracteristicas2Id = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[2].id]
    const caracteristicas3 = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[3]]
    const caracteristicas3Titulo = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[3].titulo]
    const caracteristicas3Id = [dataCaracteristicas&&dataCaracteristicas.caracteristicas[3].id]
  return (
    <div>
      {/* {console.log(tokenUsuario)} */}
      <div className="header-admin">
        <h3 className="header-admin-titulo">Crear Producto</h3>
      </div>
      <div className="formulario admin">
        <Formik
          initialValues={{
            titulo: "",
            descripcion: "",
            url: "1",
            ciudad: {
              id: "",
            },
            categoria: {
              id: "1",
            },
            caracteristicas: [
              {
                id: "",
              },
            ],
            imagenes: [
              {
                url: "1",
              },
            ],

          }}
          onSubmit={(values) => {
            crearProducto(JSON.stringify(values));
          }}
        >
          {({ values }) => (
            <div className="">
              <Form className="formulario-admin">
                <div className="formulario-admin-primera-linea">
                  <div>
                    <label
                      htmlFor="titulo"
                      className="formulario-admin-primera-linea-titulo"
                    >
                      Nombre producto
                    </label>
                    <Field
                      type="text"
                      name="titulo"
                      placeholder="Ej: Toyota Etios"
                      id="descripcion"
                    />
                  </div>

                  <div className="formulario-admin-selects">
                    <div>
                      <label htmlFor="categoria">Categoria</label>
                      <Field
                        as="select"
                        name="categoria.id"
                        id="categoria"
                        className="selects"
                      >
                        {dataCategorias &&
                          dataCategorias.categorias.map((cat) => (
                            <option value={cat.id}>{cat.titulo}</option>
                          ))}
                      </Field>
                    </div>

                    <label htmlFor="ciudad">Ciudad</label>

                    <Field as="select" name="ciudad.id" className="selects">
                      {data &&
                        data.ciudad.map((ciudad) => (
                          <option value={ciudad.id}>{ciudad.nombre}</option>
                        ))}
                    </Field>
                    {/* --------------------------------------------- */}

                    <div key={caracteristicas0.id}>
                      <Field
                        as="select"
                        name="caracteristicas[0].id"
                        className="selects"
                      >
                        <option defaultValue>Elegi la caracteristica</option>
                        <option value={caracteristicas0Id}>
                          {caracteristicas0Titulo}
                        </option>
                      </Field>
                    </div>
                    <div key={caracteristicas1.id}>
                      <Field
                        as="select"
                        name="caracteristicas[1].id"
                        className="selects"
                      >
                        <option defaultValue>Elegi la caracteristica</option>
                        <option value={caracteristicas1Id}>
                          {caracteristicas1Titulo}
                        </option>
                      </Field>
                    </div>
                    <div key={caracteristicas2.id}>
                      <Field
                        as="select"
                        name="caracteristicas[2].id"
                        className="selects"
                      >
                        <option defaultValue>Elegi la caracteristica</option>
                        <option value={caracteristicas2Id}>
                          {caracteristicas2Titulo}
                        </option>
                      </Field>
                    </div>
                    <div key={caracteristicas3.id}>
                      <Field
                        as="select"
                        name="caracteristicas[3].id"
                        className="selects"
                      >
                        <option defaultValue>Elegi la caracteristica</option>
                        <option value={caracteristicas3Id}>
                          {caracteristicas3Titulo}
                        </option>
                      </Field>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="descripcion">Descripcion</label>
                  <Field
                    type="text"
                    name="descripcion"
                    placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="descripcion"
                    className="formulario-descripcion"
                  />
                </div>

                <div>
                  {/* <label htmlFor="url">Url</label>
                  <Field
                    type="text"
                    name="url"
                    // placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="url"
                  /> */}
                </div>

                {/* <>
                  <label htmlFor="caracteristicas"></label>
                  <Field type="checkbox" name="caracteristicas[0]" />
                </>

                {/* ----------------------------checkbox---------------- */}
                <div className="imagenes">
                  <label htmlFor="imagenes">Imagenes</label>
                  <Field
                    type="text"
                    name="imagenes[0].url"
                    // placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="imagenes"
                  />

                  <label htmlFor="imagenes">Imagenes</label>
                  <Field
                    type="text"
                    name="imagenes[1].url"
                    // placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="imagenes"
                  />

                  <label htmlFor="imagenes">Imagenes</label>
                  <Field
                    type="text"
                    name="imagenes[2].url"
                    // placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="imagenes"
                  />

                  <label htmlFor="imagenes">Imagenes</label>
                  <Field
                    type="text"
                    name="imagenes[3].url"
                    // placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="imagenes"
                  />

                  <label htmlFor="imagenes">Imagenes</label>
                  <Field
                    type="text"
                    name="imagenes[4].url"
                    // placeholder="Ej: El Toyota Etios es un auto que ..."
                    id="imagenes"
                  />
                </div>
                
                  <div className="Buttom">
                    <button type="submit">Crear Producto</button>
                  </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export  {Administrador}

