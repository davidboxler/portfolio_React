import React from "react";
import { Link } from "react-router-dom";

export const Proyectos = () => {
  const trabajos = require("../data/trabajos.json");

  return (
    <div className="page">
      <h1 className="heading">Proyectos</h1>
      <section className="works">
        {trabajos.map((item) => {
          return (
            <article key={item.id} className="work-item">
              <div className="mask">
                <img src={"/images/" + 'proyecto' + item.id + ".png"}></img>
              </div>
              <span>{item.categorias}</span>
              <h2>
                <Link to={"/proyectos/" + item.id}>{item.nombre}</Link>
              </h2>
              <h3>{item.tecnologias}</h3>
            </article>
          );
        })}
      </section>
    </div>
  );
};
