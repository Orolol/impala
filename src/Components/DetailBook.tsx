import React, {useEffect} from 'react';
import './DetailBook.css';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectedBookId, selectedBook, sameAuthor, selectList, fetchBooks
} from './ListBookStore';

interface RouteParams {
    id: string
}


function DetailBook() {
  let { id } = useParams<RouteParams>();
  const dispatch = useDispatch();
  const book = useSelector(selectedBook);
  const list = useSelector(selectList);
  const sameAuthorBooks = useSelector(sameAuthor);
  function SelectBook(id: string) {
    dispatch(setSelectedBookId(id))

  }
  useEffect(() => {
    if(list.length === 0) dispatch(fetchBooks())
    SelectBook(id)
  }, [])
  
  return (
    <div className="DetailBook">
      <div>Detail</div>
      <div className="detailPic" ><img src={book ? book.cover : "/"} className="thumb"></img></div>
      <div className="detailInfos" >
        <div className="detailInfo" >{ book ? book.title : "Title unknown"}</div>
        <div className="detailInfo">{ book ? book.author : "Author unknown"}</div>
        <div className="detailInfo">{ book ? book.isbn : "isbn unknown"}</div>
        <Link className="detailInfo" to={{pathname: "/",}}>Back to list </Link>
      </div>
      <div  className="sameAuthor"> From the same author :
        <div  className="booklist">{(sameAuthorBooks || []).map((book) => {
                  return <div  className="book" key={book["id"]}>
                    <img src={book['cover']} className="thumb"></img>
                    <div className="bookinfo">
                      <a href="#" onClick={(event: any) => { SelectBook(book.id) }}>{book['title']}</a>
                    </div>
                  </div>
        })}</div>
      </div>
      
    </div>
  );
}

export default DetailBook;
