import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import ArtistList from './components/ArtistList'
import ArtistShow from './components/ArtistShow'
import SongList from './components/SongList'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/artists" component={ArtistList} />
            <Route exact path="/artists/:id" component={ArtistShow}/>
            <Route exact path="/artists/:id/song" component={SongList}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;