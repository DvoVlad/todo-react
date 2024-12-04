import { useRef } from 'react'
import styles from './app.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from './services/todos';

function App() {
  const refInput = useRef(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = refInput.current.value;
    dispatch(addTodo({ value }));
  }

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={styles.title}>Список дел</h1>
        <input className={styles.input} ref={refInput} type="text" placeholder='Дело'/>
        <button className={styles.submit} type='submit'>Добавить</button>
      </form>
    </>
  )
}

export default App
