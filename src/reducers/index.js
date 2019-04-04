import {combineReducers} from 'redux';


import postReducer from './PostReducer';
import tableReducer from './TableReducer';

export default combineReducers({
    posts: postReducer,
    table: tableReducer
})