import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Containers(Pages)
import Dashboard from '../containers/Dashboard';
import Home from '../containers/Home';
import Clientes from '../containers/Clientes';
//Components
import NavbarP from '../components/NavbarP';

// import useInitialState from '../hooks/useInitialState';
import { GetUsuariosService } from '../services/usuarioApiServices';
import FooterP from '../components/FooterP';



export const UserContext = createContext();

const NavRoutes = () => {

  // const [dataRender, setDataRender] = useState([]);

  // async function getAll() {
  //   const data = await GetUsuariosService();
  //   console.log(data);
  //   console.log("entre");
  //   setDataRender(data);
  //   setTimeout(() => {
  //     console.log(dataRender);
  //   }, 1000);
  // }
  // // const initialState = useInitialState();
  // // console.log(initialState)

  // useEffect(() => {
  //   getAll();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <UserContext.Provider value={"hola"}>
        <BrowserRouter>
          <NavbarP />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          <FooterP/>
        </BrowserRouter>
      </UserContext.Provider>
    </>

  )
}

export default NavRoutes;