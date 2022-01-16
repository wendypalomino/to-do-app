import React, { useContext } from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosContext } from '../TodoContext'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';


function AppUI() {

    const {
        error,
        loading,
        todos,
        searchedTodos,
        openModal,
        setOpenModal,
        completeTodo,
        onDelete } = useContext(TodosContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodoError/>}
                {loading && <TodosLoading/>}
                {(!loading && !todos.length ) && <p>Crea tu primer TODO!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleteTodo={() => completeTodo(todo.text)}
                        onDelete={() => onDelete(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton 
                setOpenModal={setOpenModal} 
                // openModal={openModal}
            />
            { openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
        </>
    )
}

export { AppUI }