import {createStore, combineReducers} from 'redux';
import {reducer as cartReducer} from './cart/reducer';

const appReducers = combineReducers({
  cart: cartReducer
})

console.log(appReducers)

const store = createStore(appReducers)

console.log(store)

export {
  store
}