import { NEW_POST, FETCH_POSTS } from './Types';
import {JWT} from './../utils/Constants';

import axios from 'axios';


export const fetchPost = () => dispatch => {
    console.dir('fetchPost');
    fetch('http://localhost:3000/items', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JWT
        }
    })
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}




export const createPost = (postData) => dispatch => {

    console.dir('createPost');

    fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JWT
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }));
}
