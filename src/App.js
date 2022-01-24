import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap';
import { getItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCounts/ItemCounts';
import React, { useEffect, useState } from 'react';
import Item from './components/Item/Item'


function App() {

  const [ItemListContainer, setItemListContainer] = useState([]);

  useEffect(()=>{
    getItemListContainer()
    .then((data)=> setItemListContainer(data))
    .catch((error)=> console.log(error));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className='fila'>
        {ItemListContainer.map((ItemListContainer)=>(
          <Item key={ItemListContainer.id} ItemListContainer={ItemListContainer}/>
        ))}
      <ItemCount/>
      </div>
    </div>
  );
}

export default App;
