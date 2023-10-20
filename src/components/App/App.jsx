import React, { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import '../App/App.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  return (
    <div className="phonebook-container">
      <div className="phonebook-wrapper">
        <h1 className="phonebook-title">Phonebook</h1>
        <h6 className="phonebook-subtitle">by Arleta Janysz</h6>

        <ContactForm onAddContact={addContact} contacts={contacts} />
        <h2 className="phonebook-contacts">Contacts</h2>
      </div>
      <Filter filter={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
