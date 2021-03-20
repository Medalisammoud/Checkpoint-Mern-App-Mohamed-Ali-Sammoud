import React from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button , ListGroup, ListGroupItem, Card } from 'react-bootstrap';

import './ContactCard.css'
import avatar from '../../assets/avatar.jpg'
import { toggleTrue, deleteContact, getContact } from "../../js/Action/actionContact";
const ContactCard = ({ contact }) => {

  const dispatch = useDispatch()
  return (
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{contact.name}</ListGroupItem>
            <ListGroupItem>{contact.email}</ListGroupItem>
            <ListGroupItem>{contact.phone}</ListGroupItem>
          <div className='btn1'>
            <Link to='/edit_contact'>
              <Button variant="outline-success" className="edit-btn" onClick={()=>{dispatch(toggleTrue()) ; dispatch(getContact(contact._id))}}>Edit</Button>
            </Link>
            <Button variant="outline-danger" className="dlt-btn" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
          </div>
        </ListGroup>
        </Card.Body>
      </Card>
  );
};

export default ContactCard;
