
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import ItemList from './components/ItemList/ItemList';
import ItemCount from './components/ItemCount/ItemCount';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';

import { useState, useEffect } from 'react';

function App() {
const [valor, setValor] = useState("")
const [cantCarrito, setCantCarrito] = useState(0)



  return (
    <div className="App">
     <Router>
      <Navbar></Navbar>
  

     </Router>

     <ItemList desc='Soy un producto!'>
     
      </ItemList> 
      <ItemListContainer setCantCarrito={setCantCarrito} cantCarrito={cantCarrito}/>

     </div>
  );
}

export default App;