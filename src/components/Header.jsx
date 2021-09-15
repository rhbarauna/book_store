import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {formatMoney} from '../utils';

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {items, total} = useSelector(({cart}) => cart);
  
  const showCart = () => {
    history.push('/cart');
  }

  const cart = () => {
    return <>
      <div>
        {items.length} ite{(items.length===0 || items.length > 1)? 'ns':'m'} no carrinho
        <p><strong>{formatMoney(total)}</strong></p>
      </div>
      <img src='./book_cart.png' alt='Ícone do carrinho' />
    </>
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className='logoContainer' onClick={()=>{history.replace('/')}}>
            <img src='./logo45.png' alt='Book store logo'/>
            <h2 className="title">Book Store</h2>
          </div>
          <div className='cartContainer' onClick={showCart}>
            { items.length === 0 ? 
            <>
              <strong>Carrinho Vazio</strong>
              <img src='./book_cart_empty.png' alt='Ícone do carrinho vazio' />
            </>
             : cart()}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header