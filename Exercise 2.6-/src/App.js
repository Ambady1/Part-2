import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '9847265376'}
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => <div key={person.name}>
        {person.name}&nbsp;
        {person.number}
        </div>)}
    </div>
  )
}

export default App
