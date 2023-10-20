import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';



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
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}