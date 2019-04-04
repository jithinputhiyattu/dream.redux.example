import {FETCH_TABLE } from './Types';
import {JWT} from '../utils/Constants';

export const getMemembers  = () => dispatch => {
    console.dir('getMemembers');
    fetch('http://localhost:3000/families', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JWT
        }
    })
        .then(response => response.json())
        .then(tableContent => dispatch({
            type: FETCH_TABLE,
            payload: tableContent
        }));
}