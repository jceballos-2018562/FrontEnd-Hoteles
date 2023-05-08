import Swal from "sweetalert2"
import { apiHotelCreate,apiHotelUpdate } from "../api/apiHotel";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    direccion: Yup.string().required('La direccion es requerido'),
    departamento: Yup.string().required('El departamento es requerido'),
    nit: Yup.string().required('El nit es requerido'),
    rating: Yup.number().required('El rating es requerido'),
    numero_reservaciones: Yup.number().required('El # de reservaciones es requerido'),
    img: Yup.string(),
    usuario: Yup.number().required('El ID del Admin del hotel es requerido'),
    evento: Yup.string()
});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (hotel, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiHotelCreate(
                hotel.nombre,
                hotel.direccion,
                hotel.departamento,
                hotel.nit,
                hotel.rating,
                hotel.numero_reservaciones,
                hotel.img,
                hotel.descripcion,
                hotel.usuario,
                hotel.eventos
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/hoteles'
                    } else {
                        window.location.href = '/hoteles'
                    }
                })
            }
        break;

        case 2:
            resultado = await apiHotelUpdate(
                hotel._id,
                hotel.nombre,
                hotel.direccion,
                hotel.departamento,
                hotel.nit,
                hotel.rating,
                hotel.numero_reservaciones,
                hotel.img,
                hotel.decripcion,
                hotel.usuario,
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
        break;
    }



}
