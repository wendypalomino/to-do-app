import React, {useState, useContext} from 'react'
import { TodosContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
    const { addTodo, setOpenModal } = useContext(TodosContext)

    const [newTodoValue, setNewTodoValue] = useState('')

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
      e.preventDefault()
      addTodo(newTodoValue)
    }
    return (
        <form 
        onSubmit={onSubmit}
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder='Cortar cebolla'
                onChange={(e) => setNewTodoValue(e.target.value)}
                value={newTodoValue}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    onClick={onCancel}
                    className='TodoForm-button TodoForm-button--cancel'
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }