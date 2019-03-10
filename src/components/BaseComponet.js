import React, { Component } from 'react'

class BaseComponent extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

    }

    onChange(event) {
        console.dir(event.target.name);
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div/>
        )
    }
}

export default BaseComponent;