

import Header from './../Header'
import MainRouter from '../navigation-bar/MainRouter';
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Posts from '../Posts';
import TableComponent from '../table-component/TableComponent';


class Main extends Component {
    render(){
        return(
            <div>
                <Header></Header>
            </div>
        );
    }
}

export default Main