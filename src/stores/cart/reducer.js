import { CART_ACTIONS_TYPE } from "./actions";

const INITIAL_STATE = {
    total: 0,
    items: []
};

const addBook = (items, payload) => {
  const savedBookIndex = items.findIndex(({book})=> payload.id === book.id);
  
  if(savedBookIndex < 0) {
    return [
      ...items, 
      {
        quantity: 1,
        book:payload
      }
    ]
  }
  
  return items.map(
    (item) => {
      if(item.book.id === payload.id) {
        return {
          quantity: item.quantity + 1,
          book:payload
        }
      }
      
      return item;
    }
  )
}

const removeBook = (items, payload) => {
  const savedBookIndex = items.findIndex(({book})=> payload.id === book.id);
  
  if(savedBookIndex < 0) {
    return items
  }

  const savedBook = items[savedBookIndex];
  savedBook.quantity-=1;  
  items[savedBookIndex] = savedBook;
  if( savedBook.quantity <= 0){
    items = items.filter(({book}) => book.id !== payload.id); 
  }
  
  return items;
}

const reducer = (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case CART_ACTIONS_TYPE.ADD: {
      const {items, total} = state
      const newItems = addBook(items, payload);
      
      return {
        ...state,
        total: total + payload.price,
        items: [
          ...newItems
        ]
      }
    }

    case CART_ACTIONS_TYPE.DEL:{
      const {items, total} = state;
      const newItems = removeBook(items, payload);

      return {
        ...state,
        total: total - payload.price,
        items: [
          ...newItems,
        ]
      }
    }
    default:
      console.log(`Action type not recognized: ${type}`);
      return state;
  }
}

export {
  reducer
}