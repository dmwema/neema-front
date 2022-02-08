import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";

/**
 * @author
 * @function Jumbotron
 **/

const Jumbotron = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenToTrue = () => {
    setIsOpen(true);
  };
  const setIsOpenToFalse = () => {
    setIsOpen(false);
  };

  const studio = useSelector((state) => state.studioInfo.studio);

  return (
    <div className="texts">
      <p className="initial teste-rev">Crez la musique de vos rêves</p>
      <h1 className="main-title">{studio.studio.name}</h1>
      <p className="desc">{studio.studio.description}</p>
      <div className="call-to-act">
        <Button onClick={setIsOpenToTrue}>Faire une réservation</Button>
      </div>
      <Modal onHide={setIsOpenToFalse} backdrop="static" size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Faire une réservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setIsOpenToFalse}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Jumbotron;
