import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import QuienesSomos from "./components/QuienesSomos";
import Cart from "./components/Cart";
import './components/App.css';





function App() {


  return (
    <div className="App">
      
  
  <Router> 
  <Navbar />
    <Switch>

      <Route exact path='/' >
        <ItemListContainer />
      </Route>

      <Route exact path='/category/:id' >
        <ItemListContainer />
      </Route>

      <Route exact path='/category/item/:id'>
        <ItemDetailContainer />
      </Route>

      <Route exact path='/quienessomos'>
        <QuienesSomos />
      </Route>

      <Route exact path='/carrito'>
        <Cart />
      </Route>
      

    </Switch>
 </Router>



    </div>


  );
}


export default App;
