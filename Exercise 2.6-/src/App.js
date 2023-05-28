import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhonebookForm from './PhonebookForm';
import PhonebookFilter from './PhonebookFilter';
import PhonebookList from './PhonebookList';

const App = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data); // Update persons state with response.data
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    // Check if the name already exists in the phonebook
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`);
      return;
    }

    const newContact = { name: newName, number: newNumber };
    setPersons(persons.concat(newContact));
    setNewName('');
    setNewNumber('');
    saveData(newContact);
  };

  const saveData = (newContact) => {
    // Save new number to json server
    axios
      .post('http://localhost:3001/persons', newContact)
      .then((response) => {
        console.log('Data stored successfully:', response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error as needed
      });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPersons = persons.filter((person) =>
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
