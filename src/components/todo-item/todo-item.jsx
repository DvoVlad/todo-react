import styles from './todo-item.module.css'
import { useState } from 'react';
import DeleteModal from './delete-modal/delete-modal';
import PropTypes from 'prop-types';

function TodoItem({uuid, value, done, changeCheck, updateTodoItem, deleteTodoItem}) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const openEdit = () => {
    setIsEdit(true);
  }

  const closeEdit = () => {
    if(value === '') {
      onOpenModal()
      return;
    }
    setIsEdit(false);
  }

  const onChangeTodo = (e) => {
    updateTodoItem(uuid, e.target.value);
  }

  const onDeleteSubmit = () => {
    deleteTodoItem(uuid);
    setIsDelete(false);
  }

  const onCloseModal = () => {
    setIsDelete(false);
  }

  const onOpenModal = () => {
    setIsDelete(true);
  }

  return (
    <div className={styles.item}>
      <input onChange={() => changeCheck(uuid)} type="checkbox" checked={done} />
      {!isEdit ? <>
        <span className={`${styles.todoName} ${done ? styles.done: ''}`}>{value}</span>
        <button className={styles.editButton} onClick={openEdit} type="button">Редактировать</button>
      </> :
      <>
        <input className={styles.editField} onChange={onChangeTodo} type="text" value={value} />
        <button className={styles.editButton} onClick={closeEdit} type="button">Готово</button>
      </>
      }
      <button className={styles.deleteButton} onClick={onOpenModal} type='button'>Удалить</button>
      {isDelete && <DeleteModal onClose={onCloseModal} onSubmit={onDeleteSubmit} />}
    </div>
  )
}

TodoItem.propTypes = {
  uuid: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  changeCheck: PropTypes.func.isRequired,
  updateTodoItem: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired
}

export default TodoItem;