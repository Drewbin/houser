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


const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';


function reducer(state = initialState, action) {
    switch(action.type) {

        case UPDATE_NAME: 
            return Object.assign( {}, { name: action.payload });

        case UPDATE_ADDRESS:
            return Object.assign( {}, { address: action.paylod });

        case UPDATE_CITY: 
            return Object.assign( {}, { city: action.payload });

        case UPDATE_STATE: 
            return Object.assign( {}, { state: action.payload });

        case UPDATE_ZIPCODE: 
            return Object.assign( {}, { zipcode: action.payload });

        case UPDATE_IMAGE:
            return Object.assign( {}, { image: action.payload });

        case UPDATE_MORTGAGE:
            return Object.assign( {}, { mortgage: action.payload });

        case UPDATE_RENT:
            return Object.assign( {}, { rent: action.payload });

        default : return state;
    }
}

export function updateName( name ) {
    return {
        type: UPDATE_NAME,
        payload: name,
    }
}

export function updateAddress( address ) {
    return {
        type: UPDATE_ADDRESS,
        payload: address,
    }
}

export function updateCity( city ) {
    return {
        type: UPDATE_CITY,
        payload: city,
    }
}

export function updateState( state ) {
    return {
        type: UPDATE_STATE,
        payload: state,
    }
}

export function updateZipcode( zipcode ) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode,
    }
}

export function updateImage( image ) {
    return {
        type: UPDATE_IMAGE,
        payload: image,
    }
}

export function updateMortgage( mortgage ) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage,
    }
}

export function updateRent( rent ) {
    return {
        type: UPDATE_RENT,
        payload: rent,
    }
}

export default reducer;