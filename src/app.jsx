import { useRef } from 'react'
import styles from './app.module.css'
import { useDispatch } from 'react-redux'
import { addTodo, toggleTodo, updateTodo } from './services/todos';
import { useSelector } from 'react-redux';

import TodoItem from './components/todo-item/todo-item';

function App() {
  const refInput = useRef(null);
  const dispatch = useDispatch();
  const todoItems = useSelector((store) => store.todos.items);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = refInput.current.value;
    if(value) {
      dispatch(addTodo({ value }));
      refInput.current.value = '';
    }
  }

  const changeCheck = (uuid) => {
    dispatch(toggleTodo(uuid));
  }

  const updateTodoItem = (uuid, value) => {
    dispatch(updateTodo({ uuid, value }));
  }

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Список дел</h1>
        <input className={styles.input} ref={refInput} type="text" placeholder='Дело'/>
        <button className={styles.submit} type='submit'>Добавить</button>
        <ul className={styles.todoList}>
          {todoItems.map((item) => (
            <li key={item.uuid}>
              <TodoItem {...item} changeCheck={changeCheck} updateTodoItem={updateTodoItem}/>
            </li>
          ))}
        </ul>
      </form>
    </>
  )
}

export default App
