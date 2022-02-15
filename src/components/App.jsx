import React, { Component } from "react";

import { nanoid } from "nanoid";

import Filter from "./Filter/Filter";
import Form from "./Form/Form";
import Section from "./Section/Section";
import ContactList from "./ContactList/ContactList";

//import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Anniee Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  nameContactId = nanoid();

  addContacts = (data) => {
    const { contacts } = this.state;

    const names = contacts.map((contact) => contact.name);

    names.includes(data.name)
      ? alert(`${data.name} is already in contact`)
      : this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  deleteContacts = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormalized = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContacts} />
        </Section>

        <Section title="Contacts">
          <Filter filter={this.state.filter} changeFilter={this.changeFilter} />

          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContacts}
          />
        </Section>
      </>
    );
  }
}

export default App;