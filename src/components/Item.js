import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Item = () => {
    const trabajos = require("../data/trabajos.json");
    const [proyecto, setProyecto] = useState({})
    const params = useParams()

    useEffect(() => {
        let proyecto = trabajos.filter(item => item.id === params.id)

        setProyecto(proyecto[0])
    }, [])

  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={"/images/"+'proyecto'+proyecto.id+".png"} alt='foto_portada_proyecto'></img>
        </div>
        <h1 className='heading'>{proyecto.nombre}</h1>
        <p className='tecn'>{proyecto.tecnologias}</p>
        <p className='desc'>{proyecto.description}</p>
        <a href="#" className='btn_go' target="_blank">Ir al proyecto</a>
    </div>
  )
}
