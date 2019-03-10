import React, { Component } from 'react'
import {Link} from 'react-router';
import { Nav, NavDropdown, Button } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
                    <div>
                        <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                             <li> <Link href="/posts">Posts</Link></li>  
        
                             <li><Link href="/table">Dynamic Table</Link></li>  
                            </ul>

                            <div className="container">
                    {this.props.children}
                </div>
   
                    </div>


                
        )
    }
}

export default Header;
