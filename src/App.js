
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

 
  return (
    <div className="App ">
      <BrowserRouter>
      <Navbar></Navbar> 
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/*' element={<h1 className='text-white'>Pagina en construccion, en este momento no hay productos</h1>} />
        
      </Routes>   
      
     <ItemCount stock='5' initial='1' ></ItemCount>
      </BrowserRouter>
     
    
        
    
     </div>
  );
}

export default App;