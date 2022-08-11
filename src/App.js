
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';


function App() {

 




  return (
    <div className="App ">
     <Navbar></Navbar>
     <ItemListContainer></ItemListContainer>
     <ItemCount stock='5' initial='1' ></ItemCount>
     

     
    
     </div>
  );
}

export default App;