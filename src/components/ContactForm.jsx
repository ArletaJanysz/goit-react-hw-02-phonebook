import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.props.onAddContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
