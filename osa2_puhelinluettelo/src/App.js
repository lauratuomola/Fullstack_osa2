import React from 'react';
import Person from './components/Person';
import Form from './Form';
import personService from './services/persons';
import Notification from './components/Notification'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber:'',
      message: null
      
    }
  }
  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName,
      number:this.state.newNumber,
      id: this.state.newName
    }

    const nimet = this.state.persons.map(nimi => nimi.name)

    if (!nimet.includes(nameObject.name)) {
      personService.create(nameObject)
      .then(response => {
      this.setState({
        persons: this.state.persons.concat(response.data),
        newName: '',
        newNumber:'',
        message: `Lisättiin henkilö ${nameObject.name}`
      })
      setTimeout(() => {
        this.setState({ message: null })
      }, 5000)

    })}}
  deleteName = (id) => {
    return () => {
     const result= window.confirm("Poistetaanko " + id);
     if (result=== true){
      personService
      .remove(id)
      .then(response =>  {
        this.setState({
          persons: this.state.persons.filter(person => person.id !== id),
          message: `Poistettiin henkilö ${id}`})
        setTimeout(() => {
          this.setState({ message: null })
        }, 5000)
      })
    }
    }}

  componentDidMount() {
    personService
    .getAll()
      .then(response => this.setState({ persons: response.data }))}

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value})
  }
  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.message} />

        <Form 
        addName={this.addName}
        handleNameChange={this.handleNameChange}
        handleNumberChange={this.handleNumberChange}
        newName={this.state.newName}
        newNumber={this.state.newNumber}
        />
          
        <h2>Numerot</h2>
        <div>
          {this.state.persons.map( person =>
          <Person 
            key={person.name}
            person={person}
            deleteName={this.deleteName(person.id)}
          />)}
        </div>
      </div>
    )
  }
}

export default App