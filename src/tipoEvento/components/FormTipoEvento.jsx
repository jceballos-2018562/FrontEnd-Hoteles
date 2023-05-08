import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/fromTipoEvento";
import { useEffect } from "react";

//HotelProp es mi modelo
export const FormTipoEvento = ({ tipoEventoProp, titleButton, option }) => {
    const [tipoEvento, setTipoEvento] = useState(tipoEventoProp);

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)


    useEffect(() => {
        setTipoEvento({ ...tipoEvento });
    }, [])

    const crud = async () => {

        await formUserHelper(tipoEvento, option);

    }
    console.log(tipoEvento);
    return (
        <>
            <main >
            <Link className="boton boton-verde" to="/servicios">Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Nombre Tipo de Evento</label>
                        <input
                            {...register("nombre")}
                            type="text"
                            className="form-control"
                            value={tipoEvento.nombre}
                            onChange={({ target: { value } }) => {
                                setTipoEvento(() => ({ ...tipoEvento,nombre: value }));
                            }
                            }
                        />
                        {errors.nombre && (<span>{errors.nombre.message}</span>)}
                        

                        <label htmlFor="precio">Precio</label>
                        <input

                            {...register("precio")}
                            type="text"
                            className="form-control"
                            value={tipoEvento.precio}
                            onChange={({ target: { value } }) => {
                                setTipoEvento(() => ({ ...tipoEvento, precio: value }));
                            }}
                        />
                        {errors.precio && (<span>{errors.precio.message}</span>)}


                    </fieldset>
                    <button type="submit" className="btn btn-success" onClick={crud}>{titleButton}</button>
                </form>
            </main>
        </>
    )
}