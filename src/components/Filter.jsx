import React from 'react';

const Filter = ({ filter, onChangeFilter }) => (
  <input
    type="text"
    placeholder="Filter contacts"
    value={filter}
    onChange={e => onChangeFilter(e.target.value)}
  />
);

export default Filter;
