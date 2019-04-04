import { NEW_ROW, FETCH_TABLE } from './../actions/Types';


const initialState = {
    tableData: [],
    row: {}
};


export default function (state = initialState, actions) {
    switch (actions.type) {
        case NEW_ROW: {
            console.dir('NEW_ROW');
            console.dir(actions);

            return {
                ...state,
                row: actions.payload
            }
        }
        case FETCH_TABLE: {
            console.dir('FETCH_TABLE');
            console.dir(actions);

            return {
                ...state,
                tableData: actions.payload
            }
        }
        default: {
            return state;
        }
    }

};