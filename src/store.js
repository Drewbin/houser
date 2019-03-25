import { createStore } from 'redux';


const initialState = {

    name : '',
    address : '',
    city : '',
    state : '',
    zip : 0, 
    image : '',
    mortgage : '',
    rent : '',

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case DEFAULT:
            return initialState
    }
}