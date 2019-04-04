import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPost } from '../actions/PostActions';
import { Media } from 'react-bootstrap';
import './Posts.scss';
import SinglePost from './single-post/SinglePost';

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            posts: []

        };
    }
    render() {

        const postItem = this.props.posts.map(post => (
            <SinglePost key={post.id}  data={post}></SinglePost>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItem}
            </div>
        )
    }


}

Posts.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => (
    {
        posts: state.posts.items,
        newPost: state.posts.item
    });


export default connect(mapStateToProps, { fetchPost })(Posts);