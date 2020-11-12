import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar,Nav,Container } from 'react-bootstrap';
import Notes from './pages/Notes';
import About from './pages/About';
import Todo from './pages/Todo';
function App() {
  useEffect(
    ()=>{
     let itm = localStorage.getItem('notes')
     if(!itm) localStorage.setItem('notes',JSON.stringify([]))
     let it = localStorage.getItem('todos')
     if(!it) localStorage.setItem('todos',JSON.stringify([]))
    },[]
  )
  return (
    <Router>
<Navbar bg="light" expand="lg">
  <Navbar.Brand >Notifier</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link  className="nav-link"  to="/">About</Link>
      <Link  className="nav-link"  to="/notes">Notes</Link>
      <Link  className="nav-link"  to="/todo">Todo</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
