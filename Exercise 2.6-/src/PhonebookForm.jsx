import React from 'react';

const PhonebookForm = ({ newName, newNumber, onNameChange, onNumberChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input type='text' value={newName} onChange={(e) => onNameChange(e.target.value)} />
        number: <input type='text' value={newNumber} onChange={(e) => onNumberChange(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PhonebookForm;
