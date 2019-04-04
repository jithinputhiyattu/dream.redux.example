import React, { Component } from 'react'
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import {browserHistory} from 'react-dom'
import MainRouter from './navigation-bar/MainRouter'
import TableComponent from './table-component/TableComponent'
import Posts from './Posts';


class Header extends Component {
    render() {
        return (
            <Router history={browserHistory}>


                <div>


                    <Nav>
                        <Nav.Item>
                            <Link className="-test" to="/posts">POSTS</Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Link className="-test" to="/table">TABLE</Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="-test" to="/all-post">POSTS ONLY</Link>
                        </Nav.Item>
                        <Nav.Item>
                    <Link  className="-test" to="/sap">SAP</Link>
                        </Nav.Item>
                    </Nav>
             <hr></hr>

                    <Route path="/all-post" component={Posts} ></Route>
                    <Route path="/posts" component={MainRouter}>
                    </Route>
                    <Route path="/table" component={TableComponent}></Route>
                </div>
            </Router>
        );
    }
}

export default Header;
