import React from "react";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="home">
      <h1>Hola soy David boxler <strong>desarrollador Front-end</strong></h1>

      <h2>
        Te ayudo a crear tu sitio o apicación web, tener más visibilidad y
        relevancia en internet. 
        
      </h2>
      <Link to="/contacto">Contacta conmigo.</Link>

      <section className="lasts-works">
        <h2 className="heading">Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos</p>
        <Link to="/proyectos">Mis trabajos</Link>
      </section>
    </div>
  );
};
