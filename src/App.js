
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartCustomContext from './context/CartContext';




function App() {

 
  return (
    <CartCustomContext>
    <div className="App ">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<h1 className='text-white'>Pagina en construccion, en este momento no hay productos</h1>} />
        
      </Routes>   
      
     
      </BrowserRouter>
     
    
        
    
     </div>
     </CartCustomContext>
  );
}

export default App;