import React from "react";
import { FormServicio } from "./FormServicio"
import { Modal } from "react-bootstrap";

export const UpdateServicio = ({ isOpen, onClose, serviciosEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {serviciosEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormHotel
              serviciosProp={serviciosEdit}
              titleButton="Actualizar"
              option={2}
            ></FormHotel>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={onClose}>
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
        </>
    )
}
