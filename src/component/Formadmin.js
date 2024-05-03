import React, { useState, useEffect } from 'react';

const FormAdmin = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState('');
  const [books, setBooks] = useState([]);

  const getBooksFromLocalStorage = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    return books;
  };
  useEffect(() => {
    const books = getBooksFromLocalStorage();
    setBooks(books);
  }, []);
  const addBookToList = (book) => {
    if (!books.some(b => b.title === book.title && b.author === book.author)) {
      const updatedBooks = [...books, book];
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const book = { title, author, publisher, publishedDate, favorite };
    if (validateBook(book)) {
      saveBookToLocalStorage(book);
    }
  };

  const validateBook = (book) => {
    if (!book.title ||!book.author ||!book.publisher ||!book.publishedDate) {
      setMessage('Vui lòng điền đầy đủ thông tin');
      return false;
    }
    if (book.title.length < 3 || book.author.length < 3 || book.publisher.length < 3) {
      setMessage('Các trường phải có ít nhất 3 ký tự');
      return false;
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(book.publishedDate)) {
      setMessage('Định dạng ngày xuất bản không hợp lệ (YYYY-MM-DD)');
      return false;
    }
    return true;
  };

  const saveBookToLocalStorage = (book) => {
    const existingBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = [...existingBooks, book];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setMessage('Đã lưu sách thành công');
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const book = { title, author, publisher, publishedDate, favorite };
    if (validateBook(book)) {
      addBookToList(book);
      setMessage('Đã lưu sách thành công');
    }
  };
  const displayBooks = () => {
    return (
      <div>
        <h2>List of Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
         
      <h1>Add a new book</h1>
      <form onSubmit={handleFormSubmit}>
        <style>
          {`
            form {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 50px;
            }

            label {
              margin-bottom: 10px;
              font-size: 18px;
              font-weight: bold;
            }

            input[type="text"] {
              border: 2px solid #ccc;
              border-radius: 4px;
              padding: 8px;
              font-size: 16px;
              width: 300px;
            }

            button[type="submit"] {
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 4px;
              padding: 10px 20px;
              font-size: 18px;
              cursor: pointer;
              margin-top: 20px;
            }

            button[type="submit"]:hover {
              background-color: #45a049;
            }

            p {
              margin-top: 20px;
              font-size: 18px;
              color: green;
            }

           .favorite {
              margin-left: 10px;
              cursor: pointer;
            }

           .favorite:hover {
              color: #ffd700;
            }
          `}
        </style>
        <label>
          Tiêu đề:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Tác giả:
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </label>
        <br />
        <label>
          Nhà xuất bản:
          <input type="text" value={publisher} onChange={(event) => setPublisher(event.target.value)} />
        </label>
        <br />
        <label>
          Ngày xuất bản:
          <input type="text" value={publishedDate} onChange={(event) => setPublishedDate(event.target.value)} />
        </label>
        <br />
        <label>
          Yêu thích:
          <input
            type="checkbox"
            checked={favorite}
            onChange={(event) => setFavorite(event.target.checked)}
          />
          <span className="favorite">{favorite? '★' : '☆'}</span>
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
      <p>{message}</p>
      {displayBooks()}
    </div>
  );
};

export default FormAdmin;