
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './App.css';
import Canvas from "./components/canvas";


function App() {
  
  const canvasSize = {width: 700, height: 500};
  return (
    <div className="App">
      <Canvas size={canvasSize}/>
      {/* <SprayOptions /> */}
    </div>
  );
}



export default App;