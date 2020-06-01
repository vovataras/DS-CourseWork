const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'

let initialState = {
  products: [],
  productsCount: 0,
  comment: '',
  total: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let isEqual = state.products.find(
        (product) => product.unique_id === action.newProduct.unique_id
      )

      let newState = {}

      if (isEqual) {
        let newProducts = state.products.map((product) => {
          if (product.unique_id === action.newProduct.unique_id) {
            product.quantity = product.quantity += 1
            product.totalPrice = product.quantity * product.price
          }
          return product
        })
        newState = {
          ...state,
          products: newProducts,
        }
      } else {
        newState = {
          ...state,
          products: [...state.products, action.newProduct],
          productsCount: (state.productsCount += 1),
        }
      }

      newState.productsCount = newState.products.reduce((sum, current) => {
        return sum + current.quantity
      }, 0)

      newState.total = newState.products.reduce((sum, current) => {
        return sum + current.totalPrice
      }, 0)

      return newState
    }
    case REMOVE_PRODUCT:
      return state
    case UPDATE_PRODUCT_QUANTITY:
      return state
    default:
      return state
  }
}

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

export default cartReducer
