import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Links from './Components/Links';
import References from './Components/References';
import anime from 'animejs/lib/anime.es.js';
import MyPhoto from './Images/me.jpg';


class App extends Component {
  
  componentDidMount(){

    let textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 3000,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
      });
  }

  render(){
    const App = () => (
      <div>
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
