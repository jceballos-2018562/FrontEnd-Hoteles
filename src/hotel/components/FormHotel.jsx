import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formUserHelper } from "../helpers/formUserHelper";
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from "react";
import { apiUsuario,apiDepartamento } from "../api/apiHotel";
//HotelProp es mi modelo
export const FormHotel = ({ hotelProp, titleButton, option }) => {
    const [usuario, setUsuario] = useState([]);
    const [hotel, setHotel] = useState(hotelProp);
    const [departamentoIds, setDepartamento] = useState([]);

    const viewUserlList = async () => {
        const getListUsersFromAPI = await apiUsuario();
        
        setUsuario(getListUsersFromAPI);
        
        
      };
      const viewDepList = async ()=>{
        const getListDepartamentos = await apiDepartamento();

        setDepartamento(getListDepartamentos);
        
    }
      useEffect(() => {
        viewUserlList();
        viewDepList()
      }, []);

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions)


    useEffect(() => {
        setHotel({ ...hotel });
    }, [])

    const crud = async () => {

        await formUserHelper(hotel, option);

    }
    const idUser = (user) => {
  
        setHotel(() => ({ ...hotel, usuario: user._id }));
    }

    const idDepartamento = (dep) => {
  
        setHotel(() => ({ ...hotel, departamento: dep._id }));
    }
    console.log(hotel);
    return (
        <>
            <main >
            <Link className="boton boton-verde" to="/hoteles">Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Nombre del Hotel</label>
                        <input
                            {...register("nombre")}
                            type="text"
                            className="form-control"
                            value={hotel.nombre}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel,nombre: value }));
                            }
                            }
                        />
                        {errors.nombre && (<span>{errors.nombre.message}</span>)}
                        <label htmlFor="direccion">Direccion del Hotel</label>
                        <input
                            {...register("direccion")}
                            type="text"
                            className="form-control"
                            value={hotel.direccion}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, direccion: value }));
                            }
                            }
                        />
                        {errors.direccion && (<span>{errors.direccion.message}</span>)}
                        <label htmlFor="departamento">Departamento</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" className="w-100" id="dropdown-basic">
                               Departamentos
                            </Dropdown.Toggle>

                            <Dropdown.Menu  className="w-100">
                                {
                                    departamentoIds.map((d)=>{
                                        return(
                                            <Dropdown.Item 
                                            {...register("departamento")}
                                            value={hotel.departamento}
                                            key={d._id} 
                                            onClick={()=> idDepartamento(d)}
                                            >
                                                {d.nombre} 
                                            </Dropdown.Item>
                                        )
                                    })
                                }

                            </Dropdown.Menu>
                        </Dropdown>

                        <label htmlFor="nit">NIT</label>
                        <input

                            {...register("nit")}
                            type="text"
                            className="form-control"
                            value={hotel.nit}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, nit: value }));
                            }}




                        />
                        {errors.nit && (<span>{errors.nit.message}</span>)}
                        <label >Usuarios</label>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" className="w-100" id="dropdown-basic">
                               Usuarios
                            </Dropdown.Toggle>

                            <Dropdown.Menu  className="w-100">
                                {
                                    usuario.map((u)=>{
                                        return(
                                            <Dropdown.Item 
                                            {...register("usuario")}
                                            value={hotel.usuario}
                                            key={u._id} 
                                            onClick={()=> idUser(u)}
                                            >
                                                {u.nombre} 
                                            </Dropdown.Item>
                                        )
                                    })
                                }

                            </Dropdown.Menu>
                        </Dropdown>
                        <label htmlFor="rating">Rating</label>
                        <input

                            {...register("rating")}
                            type="text"
                            className="form-control"
                            value={hotel.rating}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, rating: value }));
                            }}

                        />
                        {errors.rating && (<span>{errors.rating.message}</span>)}
                        <label htmlFor="numero_reservaciones">Numero de Reservaciones</label>
                        <input
                            {...register("numero_reservaciones")}
                            type="text"
                            className="form-control"
                            value={hotel.numero_reservaciones}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, numero_reservaciones: value }));
                            }}
                        />
                        {errors.numero_reservaciones && (<span>{errors.numero_reservaciones.message}</span>)}
                        <label htmlFor="img">IMG</label>
                        <input
                            {...register("img")}
                            type="text"
                            className="form-control"
                            value={hotel.img}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, img: value }));
                            }}
                        />
                        {errors.img && (<span>{errors.img.message}</span>)}
                        <label htmlFor="descripcion">Descripcion</label>
                        <input
                            {...register("descripcion")}
                            type="text"
                            className="form-control"
                            value={hotel.descripcion}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, descripcion: value }));
                            }}

                        />
                        {errors.descripcion && (<span>{errors.descripcion.message}</span>)}

                        <label htmlFor="eventos">Eventos</label>
                        <input
                            {...register("eventos")}
                            type="text"
                            className="form-control"
                            value={hotel.eventos}
                            onChange={({ target: { value } }) => {
                                setHotel(() => ({ ...hotel, eventos: value }));
                            }}

                        />
                        {errors.eventos && (<span>{errors.eventos.message}</span>)}
                    </fieldset>
                    <button type="submit" className="btn btn-success" onClick={crud}>{titleButton}</button>
                </form>
            </main>
        </>
    )
}