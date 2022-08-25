//React y React-router-dom
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Containers(Pages)
import Dashboard from '../containers/dashboard/Dashboard';
import Home from '../containers/home/Home';
import Clientes from '../containers/clientes/Clientes';

//Components
import NavbarP from '../components/NavbarP';
import FooterP from '../components/FooterP';


const NavRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <NavbarP />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <FooterP />
      </BrowserRouter>
    </>
  )
}

export default NavRoutes;