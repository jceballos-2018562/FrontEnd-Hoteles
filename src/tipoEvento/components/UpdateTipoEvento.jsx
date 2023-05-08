import React from "react";
import { FormTipoEvento } from "./FormTipoEvento"
import { Modal } from "react-bootstrap";

export const UpdateTipoEvento = ({ isOpen, onClose, tipoEventoEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {tipoEventoEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormHotel
              tipoEventoProp={tipoEventoEdit}
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
