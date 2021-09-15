import React from 'react'; 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {formatMoney} from '../utils';
import {ADD_BOOK_INTO_CART, REMOVE_BOOK_FROM_CART} from '../stores/cart/actions';

const Cart = (props) => {
  const {items} = useSelector(({cart}) => cart);
  const dispatch = useDispatch();

console.log(items);

  const add = (book) => {
    dispatch(ADD_BOOK_INTO_CART(book))
  }

  const remove = (book) => {
    dispatch(REMOVE_BOOK_FROM_CART(book))
  }

  return (
    <>
      <div className='container pageContent'>
        <table className='tableCart'>
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(
                ({book, quantity}, index) => {
                  return (
                    <tr key={book.id}>
                      <td className='itemIndex'> {index} </td>
                      <td className='product'>
                        <img className='tableImage'src={book.image} alt="Capa do livro" /> 
                        <span className='bookTitle'>{book.title}</span>
                      </td>
                      <td className='quantity'>
                        <button onClick={()=>remove(book)}>-</button> 
                        <span className='quantityDisplayer'>{quantity}</span>
                        <button onClick={()=>add(book)}>+</button> </td>
                      <td className='subtotal'>
                      {formatMoney(book.price * quantity)}
                      </td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Cart;