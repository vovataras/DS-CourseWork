const UPDATE_PHONE = 'UPDATE_PHONE'
const UPDATE_EMAIL = 'REMOVE_EMAIL'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_SURNAME = 'UPDATE_SURNAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_INDEX = 'UPDATE_INDEX'

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


export const updatePhoneCreator = (newPhone) => ({
  type: UPDATE_PHONE,
  newPhone: newPhone,
})
export const updateEmailCreator = (newEmail) => ({
  type: UPDATE_EMAIL,
  newEmail: newEmail,
})
export const updateNameCreator = (newName) => ({
  type: UPDATE_NAME,
  newName: newName,
})
export const updateSurnameCreator = (newSurname) => ({
  type: UPDATE_SURNAME,
  newSurname: newSurname,
})
export const updateAddressCreator = (newAddress) => ({
  type: UPDATE_ADDRESS,
  newAddress: newAddress,
})
export const updateCityCreator = (newCity) => ({
  type: UPDATE_CITY,
  newCity: newCity,
})
export const updateIndexCreator = (newIndex) => ({
  type: UPDATE_INDEX,
  newIndex: newIndex,
})


export default checkoutReducer
