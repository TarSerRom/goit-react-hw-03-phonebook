import React from "react";
import PropTypes from "prop-types";
import './ContactList.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="contacts_list">
      {contacts.map(({ name, number, id }) => (
        <li key={id} className="contacts_item">
          {name}
          <span className="contacts_number">{number}</span>
          <button
            type="button"
            className="contacts__button-delete"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;