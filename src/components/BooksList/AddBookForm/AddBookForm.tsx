import { FC, useState, FormEvent } from 'react';

type Props = {
    
}
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const book = {
      title: title,
      author: author,
      price: price
    }
    console.log(book);
  }
const AddBookForm: FC<Props> = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
  return (
    <form className="add-book-form">
        Title: <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
        Author: <input value={author} onChange={e => setAuthor(e.target.value)} type="text" />
        Price: <input value={price} onChange={e => setPrice(parseInt(e.target.value))} type="number" />
      <button>Add book</button>
    </form>
    
  );
};

export default AddBookForm;