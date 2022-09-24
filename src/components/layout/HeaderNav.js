import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>D</span>
        <h3>David Boxler Front-End</h3>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/inicio" className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/proyectos" className={({isActive}) => isActive ? 'active' : ''}>Proyectos</NavLink>
          </li>
          <li>
            <NavLink to="/habilidades" className={({isActive}) => isActive ? 'active' : ''}>Habilidades</NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({isActive}) => isActive ? 'active' : ''}>Curriculum</NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
