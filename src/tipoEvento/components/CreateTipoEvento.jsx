import { TipoEvento } from "../models/tipoEvento.models"
import { FormTipoEvento } from "./FormTipoEvento"

export const CreateTipoEvento = () => {
    return (
        <>
            <div className="container">
                <h1>Crear un Tipo de Evento</h1>
                <FormTipoEvento tipoEventoProp={TipoEvento}
                    titleButton={'Crear Servicio'}
                    option={1} />
            </div>
        </>
    )
}
