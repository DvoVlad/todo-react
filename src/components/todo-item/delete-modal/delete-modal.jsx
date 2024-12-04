import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './modal-overlay/modal-overlay';
import styles from "./delete-modal.module.css";

const modalRoot = document.getElementById("react-modals"); 

function DeleteModal({ onClose, onSubmit }) {
  useEffect(() => {
    const onEscClose = e => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener('keydown', onEscClose);

    return () => {
      document.removeEventListener('keydown', onEscClose);
    }
  }, [onClose]);

  return(
    createPortal(
      <>
        <ModalOverlay onClick={onClose}/>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose} type="button">X</button>
          <p className={styles.title}>Вы точно хотите удалить элемент?</p>
          <button className={styles.submitButton} onClick={onSubmit} type='button'>Да</button>
          <button className={styles.cancel} onClick={onClose} type='button'>Нет</button>
        </div>
      </>,
      modalRoot
    )
  );
}

export default DeleteModal