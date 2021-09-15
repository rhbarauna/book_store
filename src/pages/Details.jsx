import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { formatMoney } from '../utils';
import {ADD_BOOK_INTO_CART} from '../stores/cart/actions';


const Details = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const {state:{book}} = useLocation();
  const {image, title, description, price} = book;
  
  const formattedPrice = formatMoney(price);

  const buy = () => {
    dispatch(ADD_BOOK_INTO_CART(book));
    history.push('/cart');
  }
  return (
    <>
      <div className='container pageContent detailsPage'>
        <div className='detailsImg'>
          <img src={image} alt={`Capa do livro ${title}`} />
        </div>
        <div className='container'>
          <h2 className='bookTitle'>{title}</h2>
          <h1 className='bookPrice'>{formattedPrice}</h1>
          <p className='detailsDescription'>
            {description}
          </p>
          <button className='buyButton' onClick={buy}>Comprar</button>
        </div>
      </div>
    </>
  )
}

export default Details;