import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import './../BooksList/BooksList.css';
type Props = {
  book: Book;
  onDelete: () => void;
}

const BookItem: FC<Props> = ({ book, onDelete}) => {
    
  return (<li className="book-item">{book.title} by {book.author}, ${book.price} <button onClick={onDelete}>Delete</button></li>);
};

export default BookItem;