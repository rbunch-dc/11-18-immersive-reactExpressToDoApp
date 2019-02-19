import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
class App extends Component {

  addNewTask(event){
    event.preventDefault(); 
    console.dir(event.target);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={()=>{
            return <Home addNewTask={this.addNewTask} />
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
