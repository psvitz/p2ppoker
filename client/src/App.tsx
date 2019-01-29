import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from './routes';

import RoomsComponent from './rooms/rooms';
import PokerSessionComponent from './pokerSession/pokerSession';

import logo from './logo.svg';
import './App.css';
import { rootReducer } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
