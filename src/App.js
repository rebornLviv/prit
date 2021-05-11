import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap';
import Todo from './pages/Todo';
import {Pets} from './pages/Pets'
import {PetDetails} from './pages/PetDetails'
import { pets } from './dummy/data';

 

function App() {
  useEffect(
    ()=>{
     let itm = localStorage.getItem('pets')
     console.log('pets from storage',itm)
     if(!itm) localStorage.setItem('pets',JSON.stringify(pets))
    },[]
  )
  return (
    <Router>
<Navbar bg="light" expand="lg">
  <Navbar.Brand >TWOK</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link  className="nav-link"  to="/">Глововна</Link>
      <Link  className="nav-link"  to="/favourites">Вибрані</Link>
      {/* <Link  className="nav-link"  to="/todo">Про нас</Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
          <Route exact path="/">
            <Pets  />
          </Route>
          <Route path="/favourites">
          <Pets favouritesMode />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/pet/:id">
            <PetDetails />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
