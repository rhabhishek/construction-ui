import React, {useState, useEffect} from 'react';
import Construction from "./components/Construction";
import {deleteConstruction, getConstructions, getParts} from "./services";
import {Button, Col, Container, Modal, Navbar, Row, Toast} from "react-bootstrap";
import Part from "./components/Part";
import NewConstruction from "./components/NewConstruction";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHardHat, faPlus} from '@fortawesome/free-solid-svg-icons'

function App() {
  const [constructions, setConstructions] = useState([]);
  const [parts, setParts] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddEditModalOpen, setIsAddEditIsModalOpen] = useState(false);
  const [construction, setConstruction] = useState(null);
  const [toastParams, setToastParams] = useState({isOpen: false, message: 'Some error occurred. Please try again!'});

  useEffect(() => {
    getConstructions().then((response) => {
      setConstructions(response);
    })
  }, []);

  useEffect(() => {
    getParts().then((result) => {
      setParts(result);
    })
  }, []);

  const handleDeleteButtonClick = (construction) => {
    setConstruction(construction);
    setIsDeleteModalOpen(true);
  }

  const handleEditButtonClick = (construction) => {
    setIsAddEditIsModalOpen(true);
    setConstruction(construction);
  }

  const handleDelete = () => {
    setIsDeleteModalOpen(false);
    deleteConstruction(construction._id).then(() => {
      console.log('Success');
    }).catch(() => {
      console.log('Failure');
    })
  }

  return (
    <Container fluid={true} className="h-100">
      <Navbar bg="dark" variant="dark">
        <Container fluid={true}>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faHardHat} color="orange" size="2x" className="d-inline-block align-top"/>{' '}Construction
            Dashboard
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
      <Row className="pl-5 pr-5 h-100">
        <Col xs={4} md={3} className="border p-2 h-100">
          <h6>Available Parts</h6>
          {parts.map(part => (<Part key={part._id} {...part} />))}
        </Col>
        <Col xs={8} md={9}>
          <Row>
            <Col>
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => {
                  setConstruction(null);
                  setIsAddEditIsModalOpen(true)
                }
                }>
                <FontAwesomeIcon icon={faPlus}/>{' '}New Construction
              </Button>
              <NewConstruction
                construction={construction}
                handleOpenModal={setIsAddEditIsModalOpen}
                isModalOpen={isAddEditModalOpen}
                setToastParams={setToastParams}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                {constructions.map((construction) => (
                  <Construction key={construction._id} construction={construction}
                                onDeleteClick={handleDeleteButtonClick} onEditClick={handleEditButtonClick}/>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <blockquote className="mb-0">Please contact xyz@abc.com for assistance</blockquote>
      </Row>
      <Modal
        centered
        show={isDeleteModalOpen}
        onHide={() => setIsDeleteModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Construction</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this construction ?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>Close</Button>
          <Button variant="primary" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
      <Toast
        position="bottom-center"
        onClose={() => setToastParams({isOpen: false, message: ''})}
        show={toastParams.isOpen}
        delay={3000}
        autohide>
        <Toast.Body>{toastParams.message}</Toast.Body>
      </Toast>
    </Container>
  );
}

export default App;
