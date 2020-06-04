export const RESTORE_STATE = 'RESTORE_STATE'

// cart-reducer
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

// checkout-reducer
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_EMAIL = 'REMOVE_EMAIL'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_SURNAME = 'UPDATE_SURNAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_INDEX = 'UPDATE_INDEX'



export const restoreStateCreator = () => ({
  type: RESTORE_STATE,
})


// cart-reducer
export const addProductCreator = (product) => ({
  type: ADD_PRODUCT,
  newProduct: product,
})
export const removeProductCreator = (unique_id) => ({
  type: REMOVE_PRODUCT,
  unique_id: unique_id,
})
export const updateProductQuantityCreator = (unique_id, quantity) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  unique_id: unique_id,
  newQuantity: quantity,
})
export const updateCommentCreator = (newComment) => ({
  type: UPDATE_COMMENT,
  newComment: newComment,
})


// checkout-reducer
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