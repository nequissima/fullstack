import { useState } from 'react'

const Number = (person) => {
  return(<li key={person.name}>{person.name}</li>)
}

const Numbers = ({persons}) => {
  return(
    <ul>
      {persons.map(person => Number(person))}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    
    if (persons.find(number => number.name === newName) === undefined) {
      const newpersons = [...persons].concat({name: newName})
      console.log(newpersons)
      setPersons(newpersons)
    } else {
      alert(`${newName} is already added to the notebook`)
    }
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons}/>
    </div>
  )

}

export default App