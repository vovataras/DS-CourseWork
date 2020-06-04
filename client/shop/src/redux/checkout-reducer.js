import {
  UPDATE_PHONE,
  UPDATE_EMAIL,
  UPDATE_NAME,
  UPDATE_SURNAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_INDEX,
} from './actions'

let initialState = {
  phone: '',
  email: '',
  name: '',
  surname: '',
  address: '',
  city: '',
  index: '',
}

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PHONE:
      return {
        ...state,
        phone: action.newPhone,
      }
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.newEmail,
      }
    case UPDATE_NAME:
      return {
        ...state,
        name: action.newName,
      }
    case UPDATE_SURNAME:
      return {
        ...state,
        surname: action.newSurname,
      }
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.newAddress,
      }
    case UPDATE_CITY:
      return {
        ...state,
        city: action.newCity,
      }
    case UPDATE_INDEX:
      return {
        ...state,
        index: action.newIndex,
      }
    default:
      return state
  }
}

export default checkoutReducer
