import "./App.css";
import React, { useContext } from "react";
import { Login } from "./Paginas/Login/Login.js";
import Registro from "./Paginas/Registro/Registro.js";
import { Home } from "./Paginas/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Paginas/Home/Header/Header";
import Footer from "./Paginas/Home/Footer/Footer";
import { useInitialState } from "./Hooks/useInitialState";
import AppContext from "./Context/AppContext";
import { AuthProvider } from "./Context/AuthContext";
import { CiudadesProvider } from "./Context/CiudadesContext";
import { DataProductosProvider } from "./Context/DataProductosContext";
import { CategoriasProvider } from "./Context/CategoriasContext";
import { DataPaginaProductosProvider } from "./Context/DataPaginaProductosContext";
import Producto from "./Paginas/Home/Listado/Producto/Producto";
import { MostrarCategoriasProvider } from "./Context/MostrarCategoriasContext";
import Reservas from "./Paginas/Reservas/Reservas";
import { FechasCalendarioProvider } from "./Context/FechasCalendarioContext";


function App() {
  const initialState = useInitialState();
  // const { elegirDataPaginaProductos } = useContext(DataPaginaProductosContext)

  return (
    <div className="App">
      <AppContext.Provider value={initialState}>
        <DataPaginaProductosProvider>
          <MostrarCategoriasProvider>
            <FechasCalendarioProvider>
              <CategoriasProvider>
                <CiudadesProvider>
                  <DataProductosProvider>
                    <AuthProvider>
                      <BrowserRouter>
                        <Header user={initialState} />
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/registro" element={<Registro />} />
                          <Route
                            path={"/producto/:id"}
                            element={<Producto />}
                          />
                          <Route
                            path={"/producto/:id/reservas"}
                            element={<Reservas />}
                          />
                        </Routes>
                        <Footer />
                      </BrowserRouter>
                    </AuthProvider>
                  </DataProductosProvider>
                </CiudadesProvider>
              </CategoriasProvider>
            </FechasCalendarioProvider>
          </MostrarCategoriasProvider>
        </DataPaginaProductosProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
