import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import './components/Posts';
import store from './Store';
import Header from './components/Header'
class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Header/>
        <div className="App">
        </div>
      </Provider>
    );
  }
}

export default App;
