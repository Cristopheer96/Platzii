import React from 'react'
import {TodoCounter} from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
const toDo =[
  { title: "Estudiar React", description: "En platzi"},
  { title: "Ir al gym", description: "Rutina de piernas"},
  { title: "Botar basura", description: "En la noche "},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        { toDo.map( (item)=> (<TodoItem key={item.title} title={item.title} description={item.description}/>))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
