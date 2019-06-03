import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table'
import Form from './components/Form'
class App extends Component {
  state={
    characters:[
      
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
  handleSubmit=character=>{
    this.setState({characters:[...this.state.characters,character]})
  }
  render() {
    const {characters}=this.state;
    return (
      <div className="App">
        <Table charactersData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
