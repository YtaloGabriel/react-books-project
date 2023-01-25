import React from 'react'
import { IBook } from './interfaces/books';

interface Props {
  children: React.ReactNode
}

interface IContextReturns {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  books: IBook[] | null,
  setBooks: React.Dispatch<React.SetStateAction<IBook[] | null>>
}

export const GlobalContext = React.createContext({} as IContextReturns);

export const GlobalStorage: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = React.useState<IBook[] | null>(null);
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{
      modal,
      setModal,
      books,
      setBooks
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext