import React, {useState} from "react"
import { useLocalStorage } from "../cuntomHooks/useLocalStorage"

const TodosContext = React.createContext()

function TodosProvider(props){

  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading
  } = useLocalStorage('TODOS_V1',[])

  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (item) => {
    const newTodos = [...todos]
    newTodos.push({
      text: item,
      completed: false
    })
    saveTodos(newTodos)
    setOpenModal(false)
  }

  const completeTodo = (text) => {
    let newTodos = [...todos]
    const todoIndex = todos.findIndex( todo => todo.text === text)
    todos[todoIndex].completed = true
    saveTodos(newTodos)

  }

  const onDelete = text => {
    let newTodos = [...todos]
    const updatedTodos = newTodos.filter( newTodo => newTodo.text !== text)
    saveTodos(updatedTodos)
  }

    return(
        <TodosContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            onDelete,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodosContext.Provider>
    )
}

export { TodosContext, TodosProvider}