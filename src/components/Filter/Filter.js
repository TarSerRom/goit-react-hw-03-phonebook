import React from "react";
import PropTypes from "prop-types";
import './Filter.css'

function Filter({ filter, changeFilter }) {
  return (
    <label className="filter">
      Find contacts by name
      <input className="filter_field" type="text" value={filter} onChange={changeFilter} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;