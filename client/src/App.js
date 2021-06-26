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

  constructor(props){
    super(props);
    this.state = {
      "pages": [
        {
          "title": "About",
          "text": "Mateo Vargas is a software developer from San Diego, CA. He attended the University of California, San Diego for his Bachelors of Science in Cognitive Science with an emphasis in Neuroscience and a Minor in Computer Science.He then pursued a Masters of Science in Computer Science at the University of Edinburgh, in Scotland. After attending graduate school, he completed a Trilogy bootcamp in the MERN stack at the University of California, San Diego Extension while working as an automation process software developer at MUFG Union Bank.In his spare time, he likes to play video games, and can be found recording lets plays for Youtube and streaming to Twitch. He lives with his partner and their one dog.",
          "img": MyPhoto
        }
      ]
    }
  }

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
          <Route exact path='/' component={ Home } page={this.state.pages[0]}></Route>
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
