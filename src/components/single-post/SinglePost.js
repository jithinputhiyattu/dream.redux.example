import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class SinglePost extends Component {

    constructor(props) {
        super(props);
        console.dir(props);
    }

    render() {
        return (
            <Jumbotron>
                <h2>{this.props.data.name}</h2>
                <hr></hr>
                <p>{this.props.data.description}</p>
            </Jumbotron>
        )
    }
}


export default SinglePost;