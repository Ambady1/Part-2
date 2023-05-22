import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    e.preventDefault()

    // Check if the name already exists in the phonebook
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`)
      return
    }

    const newContact = { name: newName,number: newNumber }
    setPersons(persons.concat(newContact))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search: <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <form onSubmit={handleChange}>
        <div>
          name: <input type='text' value={newName} onChange={(e) => { setNewName(e.target.value) }} />
          number: <input type='text' value={newNumber} onChange={(e) => { setNewNumber(e.target.value) }} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchTerm.length > 0 ? (
        filteredPersons.map(person => (
          <div key={person.name}>
            {person.name}&nbsp;
            {person.number}
          </div>
        ))
      ) : (
        persons.map(person => <div key={person.name}>
          {person.name}&nbsp;
          {person.number}
          </div>)
      )}

   
    </div>
  )
}

export default App
