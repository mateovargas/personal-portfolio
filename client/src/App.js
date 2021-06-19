import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Links from './Components/Links';
import References from './Components/References';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class App extends Component {
  render(){
    const App = () => (
      <div>
        <Navbar expand="lg">
          <Navbar.Brand href="/">MATEO VARGAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/references">References</Nav.Link>
              <Nav.Link href="/links">Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={ Home }></Route>
          <Route path='/projects' component={ Projects }></Route>
          <Route path='/references' component={ References }></Route> 
          <Route path='/links' component={ Links }></Route>
        </Switch>
      </div>
    )
    return(
      <Switch>
        <App></App>
      </Switch>
    );
  }
}

export default App;
