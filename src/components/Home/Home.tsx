import React from 'react'
import GlobalContext from '../../GlobalContext'
import styles from './Home.module.css'
import BookCard from '../BookCard/BookCard'

const Home = () => {
  const { books, setBooks } = React.useContext(GlobalContext)

  React.useEffect(() => {
    fetch('https://books-project-production.up.railway.app/api/books')
      .then(response => response.json())
      .then((data) => {
        setBooks(data)
        console.log(data)
      })
  }, [])

  return (
    <section className={`${styles.container} content`}>
      {books && books.map((book) => {
        return (
          <BookCard
            key={book.id}
            isbn={book.isbn}
            title={book.title}
            description={book.description}
            image_url={book.image_url}
            pages={book.pages}
            release_year={book.release_year}
            author={book.author}
          />
        )
      })}
    </section>
  )
}

export default Home