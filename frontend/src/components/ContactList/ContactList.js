import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from '../../js/Action/actionContact'
import ContactCard from '../ContactCard/ContactCard'

import './ContactList.css'

const ContactList = () => {

    const contacts = useSelector(state => state.contactReducer.contacts)
    const isLoading = useSelector(state => state.contactReducer.isLoading)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch])
    return (
        <div className="contact-content">
            {isLoading ? <h1>Estannnnnnna</h1>
            :
            <div className="contact-list">
                {contacts.map(contact =>
                    <ContactCard key={contact._id} contact={contact} />
                )}
            </div>
        }
        </div>
    )
}

export default ContactList
