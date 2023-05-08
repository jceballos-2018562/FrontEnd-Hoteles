import { useEffect, useState } from "react";
import { apiTipoEvento } from "../api/apiTipoEvento";
import { Link } from "react-router-dom";
import { UpdateTipoEvento } from "./UpdateTipoEvento";
import { TipoEvento } from "../models/tipoEvento.models";
import { apiTipoEventoDelete } from "../api/apiTipoEvento"; 

export const ListTipoEvento = () => {
  
  const [tipoEvento, setTipoEvento] = useState(TipoEvento);
  
  const [showModal, setShowModal] = useState(false);
  const [ids, setId] = useState(0)
  
  //Estado de usuarios en la lista de forma independiente
  const [listTypeEvent, setListTypeEvent] = useState([]);

  const viewTipoEventoList = async () => {
    const getListTypeEventFromAPI = await apiTipoEvento();
    
    setListTypeEvent(getListTypeEventFromAPI);
  };

  //UseEffect crea efectos secundarios, en este caso al momento de renderizar la tabla
  useEffect(() => {
    viewTipoEventoList();
  }, [showModal]);

  //modal
  const handleOpenModal = (h) => {
    console.log(h)
    setShowModal(true);
    setTipoEvento(h);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    const eliminarTipoEvento = async(id) => {
    let result = await apiTipoEventoDelete(id);
    if (result) {
      setListTypeEvent(listTypeEvent.filter((h) => h._id !== id));
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
        <h1>Administrador de Tipo de Eventos</h1>
        <Link to="/create-servicio" className="boton boton-verde">
          Nuevo Tipo de Evento
        </Link>
        <table className="propiedades">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Nombre</th>
              <th className="text-center">Precio</th>
              <th className="text-center">Opciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listTypeEvent.map((h) => {
              
              return (
                
                <tr key={h._id}>
                  <th className="text-center">{h._id} </th>
                  <td className="text-center">{h.nombre}</td>
                  <td className="text-center">{h.precio}</td>
                  
                  <td>
                  <button
                      className="btn btn-warning ms-2 w-100"
                      onClick={() => handleOpenModal(h)}
                    >
                    Editar
                    </button>
                    <button className="btn btn-danger ms-2 w-100" 
                      onClick={() =>eliminarTipoEvento(h._id)}>
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
        <UpdateTipoEvento
          tipoEventoEdit={tipoEvento}
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        ></UpdateTipoEvento>
      </main>
    </>
  );
};
