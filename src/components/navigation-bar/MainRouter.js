import React, { Component } from 'react';
import { Form, FormControl, Navbar } from 'react-bootstrap';
import { Nav, NavDropdown, Button } from 'react-bootstrap';
import { Router, Route, browserHistory } from 'react-router';
import Posts from '../Posts';
import TableComponent from '../table-component/TableComponent';
import PostForm from '../PostForm';
import Main from '../main/Main';
import Header from '../Header';
class MainRouter extends Component {
    render() {
        return (
            <Router>
                <Route Route path="/" component={Header} history={browserHistory}>
                    <Route path="posts" component={Posts}></Route>
                    <Route path="family" component={TableComponent}></Route>
                </Route>
            </Router>
        )
    }
}


export default MainRouter;