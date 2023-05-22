import React from 'react';

const PhonebookList = ({ persons }) => {
  return (
    <div>
      {persons.map(person => (
        <div key={person.name}>
          {person.name}&nbsp;
          {person.number}
        </div>
      ))}
    </div>
  );
};

export default PhonebookList;
