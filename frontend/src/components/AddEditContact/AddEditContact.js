import React,{ useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Button , Form } from 'react-bootstrap';
import './AddEditContact.css'
import { addContact, editContact } from "../../js/Action/actionContact";

const AddEditContact = ({ history }) => {

  
  const isEdit = useSelector(state => state.contactReducer.isEdit)
  const userReducer = useSelector(state => state.contactReducer.user)

  const [user, setUser] = useState({name: '', email: '', phone: 0})

  useEffect(() => {
    isEdit ? setUser(userReducer) : setUser({name: '', email: '', phone: 0})
  }, [isEdit, userReducer])

  const dispatch = useDispatch()

  const handleChange = (e) =>{
    setUser({...user, [e.target.name] : e.target.value})
  }


  return (
      <Form className="my-form">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
          type="text"
          placeholder="Enter Name ..." 
          name="name"
          value={user.name}
          onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter Email ..." 
          name="email"
          value={user.email}
          onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control 
          type="Number" 
          placeholder="Enter Phone ..." 
          name="phone"
          value={user.phone}
          onChange={handleChange}
          />
        </Form.Group>
        {isEdit ?
        <Button variant="outline-danger" className="edit-btn"
        onClick={()=>{dispatch(editContact(user._id, user)); history.push('/')}}
        >Edit Contact</Button>
        :
        <Button variant="outline-success" className="add-btn" 
        onClick={()=>{dispatch(addContact(user)) ; history.push('/')}}
        >Add Contact</Button>
        }
      </Form>
  );
};

export default AddEditContact;
