import React from 'react'
function TodoItem(props){
  return(
    <li>
      <span>{props.title }: </span>
      <p>{props.description}</p>
    </li>
  )
}
export {TodoItem}
