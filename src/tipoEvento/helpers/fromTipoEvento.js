import Swal from "sweetalert2"
import { apiTipoEventoCreate,apiTipoEventoUpdate } from "../api/apiTipoEvento";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    precio: Yup.string().required('El precio es requerido'),
});

export const formOptions = { resolver: yupResolver(formSchema) };



export const formUserHelper = async (hotel, option) => {
  
    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiTipoEventoCreate(
                servicios.nombre,
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
            resultado = await apiTipoEventoUpdate(
                hotel._id,
                hotel.nombre,
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
