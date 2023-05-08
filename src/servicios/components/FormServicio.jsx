import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/fromServicio";
import { useEffect } from "react";

//HotelProp es mi modelo
export const FormServicio = ({ serviciosProp, titleButton, option }) => {
    const [servicios, setServicios] = useState(serviciosProp);

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)


    useEffect(() => {
        setServicios({ ...servicios });
    }, [])

    const crud = async () => {

        await formUserHelper(servicios, option);

    }
    console.log(servicios);
    return (
        <>
            <main >
            <Link className="boton boton-verde" to="/servicios">Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Nombre del Servicio</label>
                        <input
                            {...register("nombre")}
                            type="text"
                            className="form-control"
                            value={servicios.nombre}
                            onChange={({ target: { value } }) => {
                                setServicios(() => ({ ...servicios,nombre: value }));
                            }
                            }
                        />
                        {errors.nombre && (<span>{errors.nombre.message}</span>)}


                        <label htmlFor="descripcion">Descripcion</label>
                        <input
                            {...register("descripcion")}
                            type="text"
                            className="form-control"
                            value={servicios.descripcion}
                            onChange={({ target: { value } }) => {
                                setServicios(() => ({ ...servicios, descripcion: value }));
                            }
                            }
                        />
                        {errors.descripcion && (<span>{errors.descripcion.message}</span>)}
                        

                        <label htmlFor="precio">Precio</label>
                        <input

                            {...register("precio")}
                            type="text"
                            className="form-control"
                            value={servicios.precio}
                            onChange={({ target: { value } }) => {
                                setServicios(() => ({ ...servicios, precio: value }));
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