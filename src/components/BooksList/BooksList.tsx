import { FC } from 'react';
import { Book } from './../../interfaces/Book.interface';
import BookItem from '../BookItem/BookItem';
import './BooksList.css';

type Props = {
  books: Book[];
  onDeleteBook: (title: string) => void;
}

const BooksList: FC<Props> = ({ books, onDeleteBook }) => {
  
  return (
    <ul className="books-list">
      {books.map((book: Book) => <BookItem key={book.id} book={book} onDelete={() => onDeleteBook(book.id)}/>)}
    </ul>
  );
};

export default BooksList;