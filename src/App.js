import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table'
class App extends Component {
  state={
    characters:[
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }
  removeCharacter=index=>{
    const {characters}=this.state;
    this.setState({
      characters:characters.filter((character,i)=>{
        return i!==index
      })
    })
  }
  render() {
    const {characters}=this.state;
    return (
      <div className="App">
        <Table charactersData={characters} removeCharacter={this.removeCharacter}/>
      </div>
    );
  }
}

export default App;
