import React from 'react'
import styles from './Header.module.css';
import CreateBookModal from '../CreateBookModal/CreateBookModal';
import GlobalContext from '../../GlobalContext';

const Header = () => {
  const { modal, setModal } = React.useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Books Project</h1>
        <button className={styles.button} onClick={() => setModal(true)}>Add a Book</button>
      </div>

      {modal && <CreateBookModal />}
    </header>
  )
}

export default Header