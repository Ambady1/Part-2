 import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handleChange=(e)=>{
  e.preventDefault()
  const newContact = {name: newName}
  setPersons(persons.concat(newContact))
}
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleChange}>
        <div>
          name: <input type='text' onChange={(e)=>{setNewName(e.target.value)}}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App
