import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import './Construction.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Construction({
  construction,
  onDeleteClick,
  onEditClick
}) {

  const {name, parts} = construction;
  const getTotalPartsCount = () => {
    if (!!parts) {
      return Object.values(parts).reduce((accumulator, currentValue) => (parseInt(accumulator) + parseInt(currentValue)));
    }
    return 0;

  }


  return (
    <>
      <Col xs={12} md={4}>
        <Card className="mt-2 p-2" border="secondary">
          <Card.Title>
            {name}

            <Button variant="outline-danger" size="sm" className="p-1 ml-0 btn-delete"
                    onClick={() => onDeleteClick(construction)}> <FontAwesomeIcon icon={faTrash} />{' '}  Delete</Button>
            <Button variant="outline-secondary" size="sm" className="p-1 btn-delete mr-1"
                    onClick={() => onEditClick(construction)}> <FontAwesomeIcon icon={faPencilAlt} />{' '}  Edit</Button>
          </Card.Title>
          <Card.Body>
                <span>{!!parts && Object.keys(parts).map((key) => {
                  return `${key}: ${parts[key]}, `
                })}</span>
            <span>#Parts: {getTotalPartsCount()}</span>
          </Card.Body>
        </Card>
      </Col>

    </>
  );
}

