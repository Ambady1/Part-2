import React from 'react';

const PhonebookFilter = ({ searchTerm, onSearch }) => {
  return (
    <div>
      Search: <input type='text' value={searchTerm} onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
};

export default PhonebookFilter;
