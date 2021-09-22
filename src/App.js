import React from 'react'
import './App.css';
import Navigation from './Comps/Navigation/Navigation';
import Logo from './Comps/Logo/Logo';
import ImageLink from './Comps/ImageLink/ImageLink';
import FaceRecognition from './Comps/Face-rec/Face-recognition'
import Rank from './Comps/Rank/Rank'
import { Component } from 'react';



class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }  

  onInputChange = (event) => {
    console.log(event.target.value)
  }
    render() {
      return (
        <div>
          <Navigation />
          <Logo />
          <Rank />
          <ImageLink onInputChange={this.onInputChange}/>
          <FaceRecognition/>
        </div>
      );
    
    }
  
}

export default App;
