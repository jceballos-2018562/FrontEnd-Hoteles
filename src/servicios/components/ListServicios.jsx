import { useEffect, useState } from "react";
import { apiServicios } from "../api/apiServicios";
import { Link } from "react-router-dom";
import { UpdateServicio } from "./UpdateServicio";
import { Servicios } from "../models/servicios.models";
import { apiServiciosDelete } from "../api/apiServicios"; 

export const ListServicios = () => {
  
  const [servicios, setServicios] = useState(Servicios);
  
  const [showModal, setShowModal] = useState(false);
  const [ids, setId] = useState(0)
  
  //Estado de usuarios en la lista de forma independiente
  const [listServices, setListServices] = useState([]);

  const viewServiciosList = async () => {
    const getListServicesFromAPI = await apiServicios();
    
    setListServices(getListServicesFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewServiciosList();
  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    console.log(h)
    setShowModal(true);
    setServicios(h);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    const eliminarServicios = async(id) => {
    let result = await apiServiciosDelete(id);
    if (result) {
      setListServices(listServices.filter((h) => h._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'Hotel Eliminado',
        text: 'Se ha eliminado correctamente',
        showConfirmButton: true,
        confirmButtonText: "Ok"
    })
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Error',
        text: 'No se ha podido eliminar',
        showConfirmButton: true,
        confirmButtonText: "Ok"
    })
    }
  }
  return (
    <>
      <main className="container seccion">
        <h1>Administrador de Servicios</h1>
        <Link to="/create-servicio" className="boton boton-verde">
          Nuevo Servicio
        </Link>
        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Descripcion</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Opciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listServices.map((h) => {
              
              return (
                
                <tr key={h._id}>
                  <th className="text-center">{h._id} </th>
                  <td className="text-center">{h.nombreServicio}</td>
                  <td className="text-center">{h.descripcion}</td>
                  <td className="text-center">{h.precio}</td>
                  
                  <td>
                  <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(h)}
                    >
                    Editar
                    </button>
                    <button className="btn btn-danger ms-2 w-100" 
                      onClick={() =>eliminarServicios(h._id)}>
                    Eliminar
                    </button>
                  </td>
                </tr>
                  
              );
              
            }
            
            )
            
            }
          </tbody>
        </table>
        <UpdateServicio
          serviciosEdit={servicios}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateServicio>
      </main>
    </>
  );
};
