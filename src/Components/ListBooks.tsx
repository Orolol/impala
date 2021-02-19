import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ListBooks.css';
import { Link } from 'react-router-dom';
import {
  fetchBooks, selectList,
} from './ListBookStore';

import {Book, ListBooksProps,listOfBook} from '../Types'


function ListBooks() {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const [listBook, setListBook] = useState(list);

  React.useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return <div className="listBooks">
            <div  className="booklist">{(list || []).map((book) => {
                return <div  className="book" key={book["id"]}>
                  <img src={book['cover']} className="thumb"></img>
                  <div className="bookinfo">{book['title']}</div>
                  <div className="bookinfo">{book['author']}</div>
                  <div className="bookinfo"><Link to={{ pathname: "/detail/" + book["id"], }}>More information</Link></div>
                </div>
            })}</div>
        </div>
}

export default ListBooks;