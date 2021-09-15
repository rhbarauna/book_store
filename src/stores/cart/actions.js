const CART_ACTIONS_TYPE = {
  ADD: 'ADD_BOOK_INTO_CART',
  DEL: 'REMOVE_BOOK_FROM_CART',
}

const ADD_BOOK_INTO_CART = (payload) => ({
  type: CART_ACTIONS_TYPE.ADD,
  payload
})

const REMOVE_BOOK_FROM_CART = (payload) => ({
  type: CART_ACTIONS_TYPE.DEL,
  payload
})

export {
  CART_ACTIONS_TYPE,
  ADD_BOOK_INTO_CART,
  REMOVE_BOOK_FROM_CART
}