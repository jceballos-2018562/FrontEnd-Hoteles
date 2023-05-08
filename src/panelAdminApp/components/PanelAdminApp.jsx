import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminApp = () => {
  return (
    <>
    <div>PanelAdminApp</div>
      <p> CRUD Hoteles y consulta 5.	Puede ver los eventos de un hotel en específico</p>
      <Link to="/hoteles" className="boton boton-verde">CRUD Hoteles</Link>
    </>
  )
}
