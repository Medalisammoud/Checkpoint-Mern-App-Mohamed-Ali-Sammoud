import { GET_CONTACT, GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, TOGGLE_FALSE, TOGGLE_TRUE } from "../Constants/actionTypes"
import axios from 'axios'

export const getContacts = () => async (dispatch) =>{
    dispatch({ type : GET_CONTACTS_LOAD })
    try {
        const res = await axios.get('/contact')
        dispatch({ type : GET_CONTACTS_SUCCESS , payload : res.data.listContacts })
    } catch (error) {
        dispatch({ type : GET_CONTACTS_FAIL , payload : error })
    }
}

//Delete Contact
export const deleteContact = (id) => async (dispatch) =>{

    try {
        await axios.delete(`/contact/${id}`)
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}

//add contact
export const addContact = (newContact) => async (dispatch) =>{
    try {
        await axios.post('/contact', newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

//Edit contact
export const editContact = ( id, newContact ) => async (dispatch) =>{
    try {
        await axios.put(`/contact/${id}`, newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

//get contact
export const getContact = ( id ) => async (dispatch) =>{
    try {
        const res =await axios.get(`/contact/${id}`)
        dispatch({ type : GET_CONTACT , payload: res.data.contact})
    } catch (error) {
        console.log(error)
    }
}

//Toggle True
export const toggleTrue = () =>{
    return{
        type : TOGGLE_TRUE
    }
}


//Toggle False
export const toggleFalse = () =>{
    return{
        type : TOGGLE_FALSE
    }
}