import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import contacts from './contacts.json'
import List from './components/List'
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
          <List />
      </div>
    );
  }
}

export default App;
