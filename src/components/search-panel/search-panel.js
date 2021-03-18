import React from 'react';

import './search-panel.css';

const SearchPanel = ({onSearchItems}) => {
  return (
    <input type="text"
              className="form-control search-input"
              onChange={onSearchItems}
              placeholder="type to search" />
  );
};

export default SearchPanel;
