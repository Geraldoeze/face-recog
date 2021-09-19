import React from 'react'
import './App.css';
import Navigation from './Comps/Navigation/Navigation';
import Logo from './Comps/Logo/Logo';
import ImageLink from './Comps/ImageLink/ImageLink';
import FaceRecognition from './Comps/Face-rec/Face-recognition'


function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLink />
      <FaceRecognition/>
    </div>
  );
}

export default App;
