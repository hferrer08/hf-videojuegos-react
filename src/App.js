
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import ItemList from './components/ItemList/ItemList';
import ItemCount from './components/ItemCount/ItemCount';
import traerDatos from './data/data';
import { useEffect } from 'react';

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
    </div>
   
  );
}

export default App;