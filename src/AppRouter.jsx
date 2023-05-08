import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { ListHotel } from "./hotel/components/ListHotel"

import { CreateHotel } from "./hotel/components/CreateHotel"
import { isAdminAppAuthenticated, isAdminHotelAuthenticated, isUserLogged, isUsuarioAuthenticated } from "./login/helpers/isUserAuthenticated"
import { ListServicios } from "./servicios/components/ListServicios"
import { CreateServicio } from "./servicios/components/CreateServicio"
import { Home } from "./home/components/home"
import { PanelAdminApp } from "./panelAdminApp/components/PanelAdminApp"
import { PanelAdminHotel } from "./panelAdminHotel/components/PanelAdminHotel"

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Generales*/}
                {/* Chequea si  el usuario esta logeado o no*/}
                <Route path="/login" element={!isUserLogged() ? <Login/> : <Navigate to="/home" />}>
                </Route>

                {/* RUTAS SOLO PARA ADMIN_APP*/}
                {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
                <Route path="/panel-adminapp" element={isAdminAppAuthenticated() ? (<PanelAdminApp />) : (<Navigate to="/login" />) } >
                </Route>
                    {/* Chequea si es ADMIN_APP para redirigirlo al panel de control Hotel*/}
                <Route path="/hoteles" element={isAdminAppAuthenticated() ? (<ListHotel />) : (<Navigate to="/login" />) } >
                </Route>
                    {/* Chequea si es ADMIN_APP para redirigirlo al agregar Hotel*/}
                <Route path="/create-hotel" element={isAdminAppAuthenticated() ? (<CreateHotel />) : (<Navigate to="/login" />) } >
                </Route>
                
                {/* RUTAS SOLO PARA ADMIN_HOTEL*/}
                <Route path="/panel-adminhotel" element={isAdminHotelAuthenticated() ? (<PanelAdminHotel/>) : (<Navigate to="/login" />) } >
                </Route>
                {/* FUNCIONES DEL ADMIN_HOTEL EN SERVICIOS */}
                <Route path="/servicios" element={isAdminHotelAuthenticated() ? (<ListServicios/>) : (<Navigate to="/login" />) } >
                </Route>

                {/* FUNCIONES DEL ADMIN_HOTEL EN TIPO DE EVENTOS */}
                <Route path="/tipoevento" element={isAdminHotelAuthenticated() ? (<ListTipoEvento/>) : (<Navigate to="/login" />) } >
                </Route>

                {/* RUTAS SOLO PARA USUARIOS*/}
                {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
                <Route path="/home" element={isUsuarioAuthenticated() ? (<Home/>) : (<Navigate to="/login" />) } >
                </Route>
            </Routes>
        </>
    )
}
