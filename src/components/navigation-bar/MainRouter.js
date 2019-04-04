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
           <div>
               <PostForm></PostForm>
               <Posts></Posts>
            </div>
        )
    }
}


export default MainRouter;