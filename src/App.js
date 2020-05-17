import React from 'react';
import logo from './logo.svg';
import './App.css';
class ContactList extends React.Component{
  render(){
    const people = this.props.conact
    return <ol>
        {people.map(person=>(<li key={person.name}>{person.name}</li>))}
    </ol>
  }
}
function App() {
  return (
    <div className="App">
      <ContactList conact={[
        { name: 'Rilone'},
        {name: 'Julia'}
        ]}/>
      <ContactList conact={[
        { name: 'Nena'},
        {name: 'Magnus'}
      ]}/>
    </div>
  );
}

export default App;
