import React from 'react';
import styles from './BookCard.module.css';
import { IBook } from '../../interfaces/books';
import { Link } from 'react-router-dom';

const BookCard: React.FC<IBook> = (
  {
    isbn,
    title,
    description,
    image_url,
    pages,
    release_year,
    author
  }
) => {
  return (
    <section className={styles.card}>
      <img
        className={styles.image}
        src={image_url || '../../../public/assets/imagenotfound.jpg'}
        alt="Book Image" />

      <div className={styles.infoTop}>
        <h1 className={styles.title}>{title || 'Title'}</h1>
        <span className={styles.infoTopDetails}>{author || 'Author'} | {release_year}</span>
      </div>

      <div className={styles.infoMid}>
        <span className={styles.pages}>Pages: {pages || 'Pages'}</span>
        <span className={styles.isbn}>ISBN: {isbn || 'ISBN'}</span>
      </div>

      <p className={styles.description}>{description || 'Description'}</p>

      <Link to="/" className={styles.link}>See Details</Link>
    </section>
  )
}

export default BookCard