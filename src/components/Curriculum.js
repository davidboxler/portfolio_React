import React from "react";

export const Curriculum = () => {
  return (
    <div className="page">
      <h1 className="heading">Curriculum</h1>

      <div className="row align-items-baseline">
        <div className="col-lg-6">
          <h2 className="mb-4">Mi Educación</h2>
          <div className="timeline">
            <div className="position-relative ex-me mb-4 timeline-item">
              <i
                className="far fa-dot-circle text-primary position-absolute"
              ></i>
              <h3 className="font-weight-bold mb-1">
                Técnico Sup. en Programación
              </h3>
              <p className="mb-2">
                <strong>Universidad Tecnológica Nacional</strong> |
                <small>2016 - 2020</small>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h2 className="mb-4">Mi Experiencia</h2>
          <div className="timeline">
            <div className="position-relative ex-me mb-4 timeline-item">
              <i
                className="far fa-dot-circle text-primary position-absolute"
              ></i>
              <h3 className="font-weight-bold mb-1">Desarrollador Front End</h3>
              <p className="mb-2">
                <strong>IncluIT</strong> |
                <small>octubre 2021 - actualidad</small>
              </p>
              <p>
                Tareas realizadas: Participación en proyecto de la empresa,
                utilizando las siguientes tecnologías: HTML, CSS, Bootstrap,
                JavaScript, Svelte.JS, C#.
              </p>
            </div>
            <div className="position-relative ex-me mb-4 timeline-item">
              <i
                className="far fa-dot-circle text-primary position-absolute"
              ></i>
              <h5 className="font-weight-bold mb-1">Desarrollador Web</h5>
              <p className="mb-2">
                <strong>Megatone</strong> |
                <small>marzo 2021 – octubre 2021</small>
              </p>
              <p>
                Tareas realizadas: Desarrollo y mantenimiento del sitio web
                Megatone.net utilizando HTML, CSS, JavaScript y Vue.JS.
              </p>
            </div>
            <div className="position-relative ex-me mb-4 timeline-item">
              <i
                className="far fa-dot-circle text-primary position-absolute"
              ></i>
              <h5 className="font-weight-bold mb-1">Soporte Técnico</h5>
              <p className="mb-2">
                <strong>Sucesores de Alfredo Williner S.A.</strong> |
                <small>febrero 2020 - febrero 2021</small>
              </p>
              <p>
                Tareas realizadas: Me desempeñaba en el Área de mesa de ayuda,
                cubriendo funciones de soporte técnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
