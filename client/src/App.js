import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Page from './Page'
import TesterPage from './TesterPage'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/tester">Tester</Link>
        </header>
        <div>
          <Route exact path="/" component={Page} />
          <Route exact path="/tester" component={TesterPage} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
