import React from 'react'
import { Link } from "react-router-dom"

export const PanelAdminHotel = () => {
  return (
    <>
    <div>PanelAdminHotel</div>
      <p>Ejecuta tal Servicios</p>
      <Link to="/servicios" className="boton boton-verde">CRUD SERVICIOS</Link>
    </>
  )
}
