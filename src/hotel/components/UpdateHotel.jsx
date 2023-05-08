import React from "react";
import { FormHotel } from "./FormHotel"
import { Modal } from "react-bootstrap";

export const UpdateHotel = ({ isOpen, onClose, hotelEdit }) => {
    
    if (!isOpen) {
        return null;
      }
    return (
        <>
            <Modal show={isOpen}>
          <Modal.Header>
            <Modal.Title className="text-dark">ID: {hotelEdit._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormHotel
              hotelProp={hotelEdit}
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
