import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodosContext } from '../TodoContext'

function TodoCounter() {

  const {
    totalTodos,
    completedTodos
  } = useContext(TodosContext)

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

export { TodoCounter };