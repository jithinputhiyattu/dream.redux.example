import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BaseComponent from './BaseComponet';
import { createPost } from '../actions/PostActions';
import { Button, Form } from 'react-bootstrap';

class PostForm extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        //this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /*onChange(event) {
        console.dir("Child" + event.target.name);
        this.setState({[event.target.name]: event.target.value})
    }*/
    onSubmit(event) {
        event.preventDefault();
        const post = Object.assign({}, {
            name: this.state.title,
            description: this.state.body,
        });

        this.props.createPost(post);
        this.setState({
            title: '',
            body: ''
        })
    };



    render() {
        return (


            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.onChange} value={this.state.title} placeholder="Enter post title" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Body</Form.Label>
                    <Form.Control name="body" onChange={this.onChange} value={this.state.body} as="textarea" rows="3" placeholder="Post Body" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        )
    }

}



export default connect(null, { createPost })(PostForm);