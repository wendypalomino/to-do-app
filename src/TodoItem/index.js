import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem" key={props.text}>
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onCompleteTodo}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };