import {GET_FAMILY_MEMBERS } from './Types';

const getMemembers  = () => dispatch => {
    console.dir('fetchPost');
    fetch('http://localhost:3000/families', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFiY0BtYWlsLmNvbSIsInVzZXJfaWQiOjEsImV4cCI6MTU1MjIzNTA0M30.MAykk0_JlMtiM4zoUcwvZglAvuEFvbGlZjAi1bt8Mgo"
        }
    })
        .then(response => response.json())
        .then(posts => dispatch({
            type: GET_FAMILY_MEMBERS,
            payload: posts
        }));
}