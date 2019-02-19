import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import axios from 'axios'


class App extends Component {
  addNewTask(task,date){
    console.log(task, date);
    axios({
      method: 'POST',
      url: 'http://localhost:3000/addTask',
      data: {
        taskName: task,
        taskDate: date
      }
    }).then((backEndResponse)=>{
      console.log(backEndResponse)
    })
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
