import styles from './todo-item.module.css'
import { useState } from 'react';
import DeleteModal from './delete-modal/delete-modal';

function TodoItem({uuid, value, done, changeCheck, updateTodoItem, deleteTodoItem}) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
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
      {!isEdit ? <>
        <input onChange={() => changeCheck(uuid)} type="checkbox" checked={done} />
        <span className={`${done ? styles.done: ''}`}>{value}</span>
        <button className={styles.editButton} onClick={toggleEdit} type="button">Редактировать</button>
        <button className={styles.deleteButton} onClick={onOpenModal} type='button'>Удалить</button>
      </> :
      <>
        <input onChange={() => changeCheck(uuid)} type="checkbox" checked={done} />
        <input onChange={onChangeTodo} type="text" value={value} />
        <button className={styles.editButton} onClick={toggleEdit} type="button">Готово</button>
        <button className={styles.deleteButton} onClick={onOpenModal} type='button'>Удалить</button>
      </>
      }
      {isDelete && <DeleteModal onClose={onCloseModal} onSubmit={onDeleteSubmit} />}
    </div>
  )
}

export default TodoItem;