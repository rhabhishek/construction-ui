import React from 'react';
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHammer, faHardHat, faToolbox, faTools, faWrench} from "@fortawesome/free-solid-svg-icons";

export default function Part ({
    _id, name, type
                              }) {

  const getRandomIcon = () => {
    const icons = [faTools, faToolbox, faWrench, faHardHat, faHammer];
    return icons[Math.floor(Math.random()*icons.length)];
  }
    return (
        <Card className="mt-2 p-2" draggable="true">
            <Card.Title>{name} {' '}<FontAwesomeIcon icon={getRandomIcon()}/></Card.Title>
            <Card.Subtitle>Type: {type}</Card.Subtitle>
        </Card>
    );
}