import styles from './todo-item.module.css'
import { useState } from 'react';

function TodoItem({uuid, value, done, changeCheck, updateTodoItem}) {
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  }

  const onChangeTodo = (e) => {
    updateTodoItem(uuid, e.target.value);
  }

  return (
    <div className={styles.item}>
      {!isEdit ? <>
        <input onChange={() => changeCheck(uuid)} type="checkbox" checked={done} />
        {value}
        <button className={styles.editButton} onClick={toggleEdit} type="button">Редактировать</button>
        <button type='button'>Удалить</button>
      </> :
      <>
        <input onChange={() => changeCheck(uuid)} type="checkbox" checked={done} />
        <input onChange={onChangeTodo} type="text" value={value} />
        <button className={styles.editButton} onClick={toggleEdit} type="button">Готово</button>
      </>
      }
    </div>
  )
}

export default TodoItem;