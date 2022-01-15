import React, { useContext } from 'react';
import './TodoSearch.css';
import { TodosContext } from '../TodoContext'

function TodoSearch() {

    const {
        searchValue,
        setSearchValue
    } = useContext(TodosContext)

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export { TodoSearch };