
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './App.css';
//import brickwall from "./components/images/brickwall.jpg"
import Canvas from "./components/canvas";
//import spraybottle from "./images/spraybottle.png"

function App() {
  
  const canvasSize = {width: 700, height: 500};
  return (
    <div className="App">
      <Canvas size={canvasSize}/>
    </div>
  );
}



export default App;