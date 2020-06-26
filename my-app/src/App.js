import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Learn reactjs",
        completed: true
      }
    ]
  }

  render() {
    return (      
      <div className="App">
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
