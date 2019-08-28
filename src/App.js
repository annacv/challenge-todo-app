import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/App.scss';

import Home from './pages/Home'
import Todos from './pages/Todos'
import CreateTodo from './pages/CreateTodo'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/todos' component={Todos} />
          <Route exact path='/todos/create' component={CreateTodo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
