
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import ItemList from './components/ItemList/ItemList';
import ItemCount from './components/ItemCount/ItemCount';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import traerDatos from './data/data';
import { useState, useEffect } from 'react';

function App() {
const[data,setData] = useState([])
const[loading,setLoading] = useState(true)

useEffect(()=>{
  traerDatos
  .then((resp)=>setData(resp))
  .catch(err=>console.log(err))
  .finally(()=>setLoading(false))
},[])


  return (
    <div className="App">
     <Router>
      <Navbar></Navbar>
  

     </Router>
     <ItemList desc='Soy un producto!'>
     
      </ItemList> 
      <ItemCount stock='5' initial='1'> </ItemCount> 


      <div>
        { 
       
         loading ? <h2>Cargando... </h2> : 
         data.map(cerv=><li key={cerv.id}>{cerv.id} 
         
        {cerv.nombre}
         <img className="img-thumbnail "src={cerv.image}></img></li>)
        }

      </div>
    </div>
   
  );
}

export default App;