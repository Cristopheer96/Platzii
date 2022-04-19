import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  // const [searchValue, setSearchValue] = React.useState('');// devulve un array de dos elementos,la primera osicion es nuestro estado y el segundo la funcion que modifica el estado

  const onSearchValue = (event) =>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return [
    <input className="TodoSearch" placeholder="Cebolla" onChange={onSearchValue} />,
    <p>{searchValue}</p>
  ];
}

export { TodoSearch };
