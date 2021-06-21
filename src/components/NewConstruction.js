import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import {createConstruction, updateConstruction} from "../services";

export default function NewConstruction(
  {
    construction, handleOpenModal, isModalOpen, setToastParams
  }
) {
  const [name, setName] = useState('');
  const [partACount, setPartACount] = useState(0);
  const [partBCount, setPartBCount] = useState(0);
  const [partCCount, setPartCCount] = useState(0);

  useEffect(() => {
    setName(construction?.name || '');
    setPartACount(construction?.parts.A || 0)
    setPartBCount(construction?.parts.B || 0)
    setPartCCount(construction?.parts.C || 0)
  }, [construction]);

  const handleCreate = () => {
    handleOpenModal(false);
    const request = {name, parts: {A: partACount, B: partBCount, C: partCCount}};
    createConstruction(request).then(() => {
      setToastParams({isOpen: true, message: 'Construction created successfully!'})
    }).catch(() => {
      setToastParams({isOpen: true, message: 'Failed to create a Construction'})
    });
  }

  const handleUpdate = () => {
    handleOpenModal(false);
    const request = {name, parts: {A: partACount, B: partBCount, C: partCCount}};
    updateConstruction(construction._id, request).then(() => {
      setToastParams({isOpen: true, message: 'Construction created successfully!'})
    }).catch(() => {
      setToastParams({isOpen: true, message: 'Failed to create a Construction'})
    });
  }
  return (

    <>
      <Modal
        centered
        show={isModalOpen}
        onHide={() => handleOpenModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Construction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Form.Group controlId="constructionName">
                    <Form.Label>Name of the Construction</Form.Label>
                    <Form.Control type="text" placeholder="Name for the construction" value={name}
                                  onChange={({target}) => setName(target.value)}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="countForPartA">
                    <Form.Label>Part A</Form.Label>
                    <Form.Control type="number" min={0} placeholder="Count for Part A"
                                  value={partACount} onChange={({target}) => setPartACount(target.value)}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="countForPartB">
                    <Form.Label>Part B</Form.Label>
                    <Form.Control type="number" min={0} placeholder="Count for Part B"
                                  value={partBCount} onChange={({target}) => setPartBCount(target.value)}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="countForPartC">
                    <Form.Label>Part C</Form.Label>
                    <Form.Control type="number" min={0} placeholder="Count for Part C"
                                  value={partCCount} onChange={({target}) => setPartCCount(target.value)}/>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleOpenModal(false)}>Close</Button>
          {construction?._id ?
            <Button variant="primary" onClick={handleUpdate}>Update</Button> :
            <Button variant="primary" onClick={handleCreate}>Create</Button>}
        </Modal.Footer>
      </Modal>

    </>)
    ;
}
