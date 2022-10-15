import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'
import Header from './Header'
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

    const[contacts, setContacts] = useState([])

    const addContactHandler = (contact) =>{
      setContacts([...contacts, {id: uuid(), ...contact}])
    }

    const removeContactHandler = (id) =>{
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(newContactList)
    }

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts} removeContact = {removeContactHandler} />
    </div>
  );
}

export default App;
