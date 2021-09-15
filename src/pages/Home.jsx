import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {getBooks} from '../services/api';
import {ADD_BOOK_INTO_CART} from '../stores/cart/actions';
import {formatMoney} from '../utils';


const Home = (props) => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const retrieveBooks = async () => {
      const bks = await getBooks();
      const booksWithFormattedPrice = bks.map((book) => {
        return {
          ...book,
          formattedPrice: formatMoney(book.price)
        }
      });
      setBooks(booksWithFormattedPrice);
    }
    retrieveBooks()
  }, [])

  const buyBook = (book) => {
    dispatch(ADD_BOOK_INTO_CART(book))
  }

  const bookDetails = (book) => {
    history.push('/details', {book})
  }

  return (
    <>
      <div className='container pageContent'>
        <div className='bookList'>
          {
            books.map(
              book => (
                <article key={book.id} className='bookListItem' onClick={()=>{bookDetails(book)}}>
                  <img className='bookImage' src={book.image} alt={`Capa do livro ${book.title}`}/>
                  <div className="details">
                    <h5 className='bookTitle'>{book.title}</h5>
                    <span className='bookPrice'>{book.formattedPrice}</span>
                    <div className='btnGroup'>
                      <button onClick={(e)=>{
                        e.stopPropagation();
                        bookDetails(book)}
                      }>Detalhes</button>
                      <button onClick={(e)=>{
                        e.stopPropagation();
                        buyBook(book)}
                      }>Comprar</button>
                    </div>
                  </div>
                </article>
              )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Home;