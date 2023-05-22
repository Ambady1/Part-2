import React, { useState } from 'react';
import PhonebookForm from './PhonebookForm';
import PhonebookFilter from './PhonebookFilter';
import PhonebookList from './PhonebookList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    // Check if the name already exists in the phonebook
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`);
      return;
    }

    const newContact = { name: newName, number: newNumber };
    setPersons(persons.concat(newContact));
    setNewName('');
    setNewNumber('');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <PhonebookFilter searchTerm={searchTerm} onSearch={handleSearch} />
      <PhonebookForm
        newName={newName}
        newNumber={newNumber}
        onNameChange={setNewName}
        onNumberChange={setNewNumber}
        onSubmit={handleChange}
      />
      <h2>Numbers</h2>
      <PhonebookList persons={searchTerm ? filteredPersons : persons} />
    </div>
  );
};

export default App;
