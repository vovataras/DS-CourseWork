const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'

let initialState = {
  products: [],
  productsCount: 0,
  comment: '',
  subtotal: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return state
    case REMOVE_PRODUCT:
      return state
    case UPDATE_PRODUCT_QUANTITY:
      return state
    default:
      return state
  }
}

export const addProductCreator = () => ({ type: ADD_PRODUCT })
export const removeProductCreator = (productId) => ({ type: REMOVE_PRODUCT, productId: productId })
export const updateProductQuantityCreator = (quantity) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  newQuantity: quantity,
})

export default cartReducer
