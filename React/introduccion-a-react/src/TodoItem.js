import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () =>{
    alert('Tarea'+ props.text + ' completada')
  }
  const onDelete = () =>{
    alert('Tarea'+ props.text + ' borrada')
  }
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={onDelete }
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
