import React from 'react'
import styles from './CreateBookModal.module.css';
import GlobalContext from '../../GlobalContext';
import axios from 'axios';
import { IBook } from '../../interfaces/books';

const CreateBookJSX = () => {
  const { setModal } = React.useContext(GlobalContext);

  const [loading, setLoading] = React.useState<boolean>(false);

  const containerElement = React.useRef<HTMLDivElement>(null);

  const isbn = React.useRef<HTMLInputElement>(null);
  const title = React.useRef<HTMLInputElement>(null);
  const description = React.useRef<HTMLInputElement>(null);
  const imageUrl = React.useRef<HTMLInputElement>(null);
  const numberOfPages = React.useRef<HTMLInputElement>(null);
  const releaseYear = React.useRef<HTMLInputElement>(null);
  const author = React.useRef<HTMLInputElement>(null);

  const API_URL = 'https://books-project-production.up.railway.app/api/books';

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerElement.current === event.target) {
      setModal(false);
    }
  }

  const postBook = async (bookInfo: {}) => {
    setLoading(true);

    try {
      const response = await axios.post(API_URL, bookInfo);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setModal(false);
      setLoading(false);
    }
  }

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const bookInfo = {
      isbn: isbn.current?.value,
      title: title.current?.value,
      description: description.current?.value,
      image_url: imageUrl.current?.value,
      pages: numberOfPages.current?.value,
      release_year: releaseYear.current?.value,
      author_id: author.current?.value
    }

    postBook(bookInfo);
  }

  return (
    <div className={styles.container} ref={containerElement} onClick={closeModal}>
      <form className={styles.form}>
        <h1 className={styles.title}>Add a Book</h1>

        <label className={styles.label}>
          <span className={styles.labelText}>ISBN</span>
          <input className={styles.input} type="text" required ref={isbn} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Title</span>
          <input className={styles.input} type="text" required ref={title} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Description</span>
          <input className={styles.input} type="text" required ref={description} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Image URL</span>
          <input className={styles.input} type="text" ref={imageUrl} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Number of Pages</span>
          <input className={styles.input} type="number" ref={numberOfPages} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Release Year</span>
          <input className={styles.input} type="number" required ref={releaseYear} />
        </label>

        <label className={styles.label}>
          <span className={styles.labelText}>Author ID</span>
          <input className={styles.input} type="number" ref={author} />
        </label>

        <button type="submit" className={styles.button} onClick={handleFormSubmit}>
          {loading ? 'Loading...' : 'Add Book'}
        </button>
      </form>
    </div>
  )
}

const CreateBookModal = () => {
  return <CreateBookJSX />
}

export default CreateBookModal