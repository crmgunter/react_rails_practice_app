import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ArtistList from './components/ArtistList'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/artists" component={ArtistList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
