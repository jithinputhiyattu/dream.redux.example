import { NEW_POST, FETCH_POSTS } from './../actions/Types';


const initialState = {
    items: [],
    item: {}
};


export default function (state = initialState, actions) {
    switch (actions.type) {
        case NEW_POST: {
            console.dir('NEW_POST');
            console.dir(actions);

            return {
                ...state,
                item: actions.payload
            }
        }
        case FETCH_POSTS: {
            console.dir('FETCH_POSTS');
            console.dir(actions);

            return {
                ...state,
                items: actions.payload
            }
        }
        default: {
            return state;
        }
    }

};