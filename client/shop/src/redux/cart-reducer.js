const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'
const UPDATE_COMMENT = 'UPDATE_COMMENT'

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
            product.totalPrice = Number(
              (product.quantity * product.price).toFixed(2)
            )
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

      newState.productsCount = getNewProductsCount(newState)
      newState.total = getNewTotal(newState)

      return newState
    }
    case REMOVE_PRODUCT: {
      let newProducts = state.products.filter((product) => {
        return product.unique_id !== action.unique_id
      })
      let newState = {
        ...state,
        products: newProducts,
      }

      newState.productsCount = getNewProductsCount(newState)
      newState.total = getNewTotal(newState)

      return newState
    }
    case UPDATE_PRODUCT_QUANTITY: {
      let newProducts = state.products.map((product) => {
        if (product.unique_id === action.unique_id) {
          product.quantity = action.newQuantity
          product.totalPrice = Number(
            (product.quantity * product.price).toFixed(2)
          )
        }
        return product
      })

      let newState = {
        ...state,
        products: newProducts,
      }

      newState.productsCount = getNewProductsCount(newState)
      newState.total = getNewTotal(newState)

      return newState
    }
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.newComment,
      }
    default:
      return state
  }
}

const getNewProductsCount = (newState) => {
  return newState.products.reduce((sum, current) => {
    return sum + current.quantity
  }, 0)
}

const getNewTotal = (newState) => {
  return newState.products.reduce((sum, current) => {
    return Number((sum + current.totalPrice).toFixed(2))
  }, 0)
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
export const updateCommentCreator = (newComment) => ({
  type: UPDATE_COMMENT,
  newComment: newComment,
})

export default cartReducer
