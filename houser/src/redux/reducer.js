const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  desiredRent: ''
};

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_DESIREDRENT = 'UPDATE_DESIREDRENT';

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export function updateImg(img) {
  return {
    type: UPDATE_IMG,
    payload: img
  };
}

export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}

export function updateDesiredRent(desiredRent) {
  return {
    type: UPDATE_DESIREDRENT,
    payload: desiredRent
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case value:

    //   break;

    default:
      return state;
  }
}
