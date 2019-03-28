const initialState = {

    name : '',
    address : '',
    city : '',
    state : '',
    zipcode : 0, 
    image : '',
    mortgage : 0,
    rent : 0,

}

const UPDATE_INFO = 'UPDATE_INFO';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_PAYMENTS = 'UPDATE_PAYMENTS';
const CLEAR_INFO = 'CLEAR_INFO';

export default function reducer(state = initialState, action) {
    let { type, payload } = action;

    switch(type) {

        case UPDATE_INFO:
            return { ...state, ...payload };

        case UPDATE_IMAGE:
            return { ...state, img : payload };

        case UPDATE_PAYMENTS: 
            return { ...state, ...payload };
            
        case CLEAR_INFO: 
            return payload;

        default : return state;
    }
};

export function updateInfo( info ) {
    return {
        type: UPDATE_INFO,
        payload: info,
    }
};

export function updateImage( img ) {
    return {
        type: UPDATE_IMAGE,
        payload: img,
    }
};

export function updatePayments( payments ) {
    return {
        type: UPDATE_PAYMENTS,
        payload: payments,
    }
};

export function clear() {
    return {
        type: CLEAR_INFO,
        payload: initialState,
    }
};