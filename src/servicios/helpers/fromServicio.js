import Swal from "sweetalert2"
import { apiServiciosCreate,apiServiciosUpdate } from "../api/apiServicios";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    descripcion: Yup.string().required('La descripcion es requerido'),
    precio: Yup.string().required('El precio es requerido'),
});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (hotel, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiServiciosCreate(
                servicios.nombreServicio,
                hotel.descripcion,
                hotel.precio,
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
                        window.location.href = '/servicios'
                    } else {
                        window.location.href = '/servicios'
                    }
                })
            }
        break;

        case 2:
            resultado = await apiServiciosUpdate(
                hotel._id,
                hotel.nombreServicio,
                hotel.descripcion,
                hotel.precio,
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
