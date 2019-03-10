import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import './components/Posts';
import Posts from './components/Posts';
import {Router, Route, browserHistory} from 'react-router';
import PostForm from './components/PostForm';
import store from './Store';

import TableComponent from './components/table-component/TableComponent';
import Header from './components/Header'
import Main from './components/main/Main'
class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <Header/>
        <div className="App">
          <PostForm />
          <br />
          <TableComponent/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
