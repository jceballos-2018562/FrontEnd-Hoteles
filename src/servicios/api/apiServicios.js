import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');
const URL = "http://localhost:8080/api/servicios/";


export const apiServicios = async () => {
    try {

        const { data: { listaServicios } } = await axios.get(`${URL}mostrar`,
        { headers: { "x-token": token } });
        console.log(listaServicios)
        return listaServicios;

    } catch ({ response: { data: { msg } } }) {
        return data.message;
    }

}



//API ruta para crear un usuarioc
export const apiServiciosCreate = async (nombreServicio, descripcion, precio) => {
    
    try {
       
        const userSave = await axios.post(
            `${URL}agregar`, {
                nombreServicio: nombreServicio,
                descripcion: descripcion,
                precio: precio,
        }, { headers: { "x-token": token } });

       
        return true;

    } catch ({ response: { data: { msg } } }) {
        
        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }    {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}
export const apiServiciosUpdate = async (id, nombreServicio, descripcion, precio) => {
    console.log(id);
    console.log(nombreServicio);
    console.log(descripcion);
    console.log(precio);
    try {
        console.log(`${URL}editar/${id}`);
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombreServicio: nombreServicio,
            descripcion: descripcion,
            precio: precio,
           
        }, { headers: { "x-token": token } });
        console.log(userSave);
        
        return true;

    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }    {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar',
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}

export const apiServiciosDelete = async( id ) => {
    try {
        const {} = await axios.delete(`${URL}/eliminar/${id}`,
         { headers: { "x-token": token } });
         return true;
    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (message) {
            return message;
        }
    }

}