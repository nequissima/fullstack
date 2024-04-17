import { useState } from 'react'

const Number = (person) => {
  return(<li key={person.name}>{person.name} {person.number}</li>)
}

const Numbers = ({persons, filter}) => {
  let list = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return(
    <ul>
      {list.map((person) => Number(person))}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    
    if (persons.find(number => number.name === newName) === undefined) {
      const newpersons = [...persons].concat({name: newName, number: newNumber})
      console.log(newpersons)
      setPersons(newpersons)
    } else {
      alert(`${newName} is already added to the notebook`)
    }
    
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        search: <input value={newSearch} onChange={handleSearchChange}/>
      </div>

      <h2>Add new person</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={newSearch}/>
    </div>
  )

}

export default App