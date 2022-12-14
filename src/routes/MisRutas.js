import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Proyectos } from "../components/Proyectos";
import { Habilidades } from "../components/Habilidades";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";
import { Item } from "../components/Item";


export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACIÓN */}
      <HeaderNav />

      {/* CONTENIDO CENTRAL */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to='/inicio' />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyectos/:id" element={<Item />} />
          <Route path="*" element={
            <div className="page">
                <h1 className="heading">Error 404</h1>
            </div>} />
        </Routes>
      </section>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
};
