import React from 'react'
import styles from './CreateBookModal.module.css';
import GlobalContext from '../../GlobalContext';

const modalInputs = [
  {
    label: 'ISBN',
    type: 'text',
    required: true
  },
  {
    label: 'Title',
    type: 'text',
    required: true
  },
  {
    label: 'Description',
    type: 'text',
    required: true
  },
  {
    label: 'Image URL',
    type: 'text',
    required: false
  },
  {
    label: 'Number of Pages',
    type: 'number',
    required: false
  },
  {
    label: 'Release Year',
    type: 'number',
    required: true
  },
  {
    label: 'Author',
    type: 'text',
    required: true
  }
]

const CreateBookJSX = () => {
  const { setModal } = React.useContext(GlobalContext);

  const containerElement = React.useRef(null);

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerElement.current === event.target) {
      setModal(false);
    }
  }

  return (
    <div className={styles.container} ref={containerElement} onClick={closeModal}>
      <form className={styles.form}>
        <h1 className={styles.title}>Add a Book</h1>

        {modalInputs?.map((input, index) => {
          return (
            <label className={styles.label} key={index}>
              <span className={styles.labelText}>{input.label}</span>
              <input className={styles.input} required={input.required} />
            </label>
          )
        })}

        <button type="submit" className={styles.button}>Add Book</button>
      </form>
    </div>
  )
}

const CreateBookModal = () => {
  return <CreateBookJSX />
}

export default CreateBookModal