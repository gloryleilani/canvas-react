
import React, { useRef, useEffect, useState, useCallback } from 'react';
import './App.css';
import brickwall from "./images/brickwall.jpg"

function App() {
  return (
    <div className="App">
      <Canvas />
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
      context.drawImage(backgroundImg, 0, 0, 700, 500)
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

    return ( 
      <React.Fragment> 
      <div>
        <canvas 
          id="canvas"
          ref={canvasRef} 
          width={700}
          height={500}
          style={{
            border: '2px solid #000',
            marginTop: 10,
            
          }}

          {...rest}/>
      </div>
      <div>
        Spray paint color: <button onClick={handleBlueClick} type="submit" value="blue">Blue</button>
        <button onClick={handleRedClick} type="submit" value="red">Red</button>
        <button onClick={handleGreenClick} type="submit" value="green">Green</button>
        <button onClick={handleYellowClick} type="submit" value="yellow">Yellow</button>
      </div>
      <div>
        Reticle size: <button onClick={handleSpraySmallClick} type="submit" value="5">Small</button>
        <button onClick={handleSprayMediumClick} type="submit" value="15">Medium</button>
        <button onClick={handleSprayLargeClick} type="submit" value="25">Large</button>

      </div>
      </React.Fragment>
    )
  }

export default App;