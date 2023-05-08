import { Servicios } from "../models/servicios.models"
import { FormServicio } from "./FormServicio"

export const CreateServicio = () => {
    return (
        <>
            <div className="container">
                <h1>Crear un Servicio</h1>
                <FormServicio serviciosProp={Servicios}
                    titleButton={'Crear Servicio'}
                    option={1} />
            </div>
        </>
    )
}
