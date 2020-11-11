
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './App.css';
import brickwall from "./images/brickwall.jpg"
//import spraybottle from "./images/spraybottle.png"

function App() {
  
  const canvasSize = {width: 700, height: 500};
  return (
    <div className="App">
      <Canvas size={canvasSize}/>
    </div>
  );
}

const Canvas = props => {

  const Coordinate = {
    x: 0,
    y: 0,
  }

  const { draw, ...rest } = props;
  const canvasRef = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState(Coordinate);  
  const [paintColor, setPaintColor] = useState('blue')
  const [reticleSize, setReticleSize] = useState('5')

  //Not working yet:
  const backgroundImg = new Image()
  backgroundImg.src = brickwall;
  


  const startPaint = useCallback ((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const getCoordinates = (event: MouseEvent) => {
    if (!canvasRef.current) {
      return 
    };
    return {x: event.clientX - canvasRef.current.offsetLeft, y:event.pageY - canvasRef.current.offsetTop};
  }

  const paint = useCallback ((event: MouseEvent) => {
    if (isPainting) {
      const newMousePosition = getCoordinates(event);
      if (mousePosition && newMousePosition) {
        drawLine(mousePosition, newMousePosition);
        setMousePosition(newMousePosition);
      }
    }
  }, [isPainting, mousePosition]);

  const drawLine = (originalMousePosition, newMousePosition) => {
    if (!canvasRef.current) {
      return
    };
    const context = canvasRef.current.getContext("2d");
    
    if (context) {
      context.strokeStyle = paintColor;
      console.log("paint color:", paintColor)
      console.log("stroke style:", context.strokeStyle)
      context.lineJoin = 'round';
      context.lineWidth = reticleSize;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();
      context.stroke();
    }
  }
  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  //Load canvas and background
  useEffect(() => {
    if (!canvasRef.current) {
      return
    };
    const context = canvasRef.current.getContext("2d");
    
    backgroundImg.onload = () => {
      context.drawImage(backgroundImg, 0, 0, props.size.width, props.size.height)
    }; 
  },[]);  

  //Start drawing when mouse is pressed downward
  useEffect(() => {
    if (!canvasRef.current) {
      return
    };
    canvasRef.current.addEventListener('mousedown', startPaint);
    return () => {
      canvasRef.current.removeEventListener('mousedown', startPaint);
    }
  }, [startPaint]);

  //Draw line on mouse move
  useEffect(() => {
    if (!canvasRef.current) {
      return
    };
    canvasRef.current.addEventListener('mousemove', paint);
    return () => {
      canvasRef.current.removeEventListener('mousemove', paint);
    }
  }, [paint]);

  //Stop drawing on mouse release
  useEffect(() => {
    if (!canvasRef.current) {
      return
    };
    canvasRef.current.addEventListener('mouseup', exitPaint);
    canvasRef.current.addEventListener('mouseleave', exitPaint);
    return () => {
      canvasRef.current.removeEventListener('mouseup', exitPaint);
      canvasRef.current.removeEventListener('mouseleave', exitPaint);
    }
  }, [exitPaint]);

  const handleBlueClick = (evt) => {
    setPaintColor(evt.target.value);
  };

  const handleRedClick = (evt) => {
    setPaintColor(evt.target.value);
  };

  const handleGreenClick = (evt) => {
    setPaintColor(evt.target.value);
  };

  const handleYellowClick = (evt) => {
    setPaintColor(evt.target.value);
  };

  const handleSpraySmallClick = (evt) => {
    setReticleSize(evt.target.value);
  };

  const handleSprayMediumClick = (evt) => {
    setReticleSize(evt.target.value);
  };

  const handleSprayLargeClick = (evt) => {
    setReticleSize(evt.target.value);
  };

  const handleSaveDrawing = (evt) => {
    const context = canvasRef.current.getContext("2d");
    context.save();
  };

  const handleClearDrawing = (evt) => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, props.size.width, props.size.height);
  };

    return ( 
      <React.Fragment> 
      <div className="spray">
        <canvas 
          id="canvas"
          className="spray"
          ref={canvasRef} 
          width={props.size.width}
          height={props.size.height}
          style={{
            border: '2px solid #000',
            marginTop: 10,
            
          }}

          {...rest}/>
      </div>
      <div className="spray">
        Spray paint color: <button onClick={handleBlueClick} type="submit" value="blue" className="blueButton">Blue</button>
        <button onClick={handleRedClick} type="submit" value="red" className="redButton">Red</button>
        <button onClick={handleGreenClick} type="submit" value="green" className="greenButton">Green</button>
        <button onClick={handleYellowClick} type="submit" value="yellow" className="yellowButton">Yellow</button>
      </div>
      <div>
        Reticle size: <button onClick={handleSpraySmallClick} type="submit" value="10" id="smallReticle" className="reticle" ></button>
        <button onClick={handleSprayMediumClick} type="submit" value="20" id="mediumReticle" className="reticle" ></button>
        <button onClick={handleSprayLargeClick} type="submit" value="35" id="largeReticle" className="reticle" ></button>

      </div>
      <div>
        <button onClick={handleSaveDrawing} type="submit" value="true">Save painting</button>
        <button onClick={handleClearDrawing} type="submit" value="true">Start over</button>
      </div>
      </React.Fragment>
    )
  }

export default App;