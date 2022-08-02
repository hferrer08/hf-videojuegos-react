
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import ItemList from './components/ItemList/ItemList';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
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