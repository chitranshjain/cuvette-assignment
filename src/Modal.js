import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import html from "./modal-img.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalFormItem from "./ModalFormItem";
import "./Modal.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="modal-title-div">
            <h1>Update Scores</h1>
            <img src={html} alt="HTML" />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ModalFormItem index="1" item="rank" name="rank" />
        <ModalFormItem index="2" item="percentile" name="percentile" />
        <ModalFormItem index="3" item="score (out of 15)" name="score" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-footer-alt-btn">
          Cancel
        </Button>
        <Button className="modal-footer-btn">
          Save <AiOutlineArrowRight className="btn-icon" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
