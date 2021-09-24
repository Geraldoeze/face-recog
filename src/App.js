import React from 'react'
import './App.css';
import Navigation from './Comps/Navigation/Navigation';
import Logo from './Comps/Logo/Logo';
import ImageLink from './Comps/ImageLink/ImageLink';
import FaceRecognition from './Comps/Face-rec/Face-recognition'
import Rank from './Comps/Rank/Rank'
import { Component } from 'react';
import SignIn from './Comps/SignIn/SignIn';
import Register from './Comps/Register/Register';



class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedin: false
    }
  }  

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit =() => {
    console.log('click')
  }

  onRouteChange= (route) => {
    if(route === 'signout'){this.setState({isSignedin: false})
    } else if (route === 'home'){this.setState({isSignedin: true})  }
    this.setState({route: route})
  }

    render() {
      return (
        <div>
          <Navigation isSignedin={this.state.isSignedin}
           onRouteChange={this.onRouteChange}/>
          { this.state.route === 'home' 
            ? <div>
                <Logo />
                <Rank />
                <ImageLink 
                  onButtonSubmit={this.onButtonSubmit}
                  onInputChange={this.onInputChange}/>
                <FaceRecognition/>
                </div>
              :(
                this.state.route === 'signin'
                ?  <SignIn onRouteChange={this.onRouteChange} />
                :  <Register onRouteChange={this.onRouteChange} />
              )
          }    
        </div>
      );
    
    }
  
}

export default App;
