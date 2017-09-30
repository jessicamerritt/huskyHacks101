import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Homework Scheduler</h1>
        </header>
        <p className="App-intro">
          Welcome to Homework Scheduler a hackathon app created to aid students in managing thier assignments. 
          Have you ever found that you don't have enough time in your day to complete everything? We're here to help.
          Simply connect your google calendar and tell us what ypu want to do and if it's possible we'll find the time.
        </p>
      </div>
    );
  }
}

export default App;
