import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar></Navbar>


     </Router>
      
    </div>
   
  );
}

export default App;
