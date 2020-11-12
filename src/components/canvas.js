import React, { useRef, useEffect, useState, useCallback } from 'react';
//import './App.css';
import brickwall from "./images/brickwall.jpg"
import spraybottle from "./images/sprayblackbottle.png"

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
    const [reticleSize, setReticleSize] = useState('10')
  
    const backgroundImg = new Image() //Create new img element
    backgroundImg.src = brickwall; //Set source path
    
  
    const startPaint = useCallback ((event) => {
      const coordinates = getCoordinates(event);
      if (coordinates) {
        setIsPainting(true);
        setMousePosition(coordinates);
      }
    }, []);
  
    const getCoordinates = (event) => {
      if (!canvasRef.current) {
        return 
      };
      return {x: event.clientX - canvasRef.current.offsetLeft, y:event.pageY - canvasRef.current.offsetTop};
    }
  
    const paint = useCallback ((event) => {
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
        //console.log("paint color:", paintColor)
        //console.log("stroke style:", context.strokeStyle)
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = reticleSize;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 15;
        context.shadowColor = paintColor;
  
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
  
    //Load canvas 2D context/surface on the canvas element/node and background img
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
    //When event (mousedown) is on target (Canvas node), call function
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
  
    const handleColorSelection = (evt) => {
      setPaintColor(evt.target.value);
    };
  
    const handleSprayWidth = (evt) => {
      setReticleSize(evt.target.value);
    };
  
  
  
    const handleSaveDrawing = () => {
      //const canvasToSave = document.getElementById("mycanvas")
      //Convert image to 'octet-stream' (Just a download)
      const savedImage = canvasRef.current.toDataURL("image/png").replace("image/png", "image/octet-stream");
      window.location.href=savedImage;
      //const savedImage = canvasRef.current.toDataURL();
    //   const savedImageName = "GraffitiWall";
    //   document.createElement("a").href = savedImage;
    //   document.createElement("a").target = "_blank";
    //   document.createElement("a").download = savedImageName;
    //   const evt = document.createEvent("MouseEvents");
    //   evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    //   document.createElement("a").dispatchEvent(evt);
      
    };
  
    const handleClearDrawing = () => {
      const context = canvasRef.current.getContext("2d");
      context.clearRect(0, 0, props.size.width, props.size.height);
      context.drawImage(backgroundImg, 0, 0, props.size.width, props.size.height)
    };
  
      return ( 
        <React.Fragment> 
        <div className="spray">
          <canvas 
            id="mycanvas"
            className="spray"
            ref={canvasRef} 
            width={props.size.width}
            height={props.size.height}
            // onmousedown={startPaint}
            // onmouseup={exitPaint}
            // onmouseleave={exitPaint}
            // onmousemove={paint}
            style={{
              border: '2px solid #000',
              marginTop: 10,
              
            }}
  
            {...rest}/>
        </div>
        <div id="paint-options-content">
            <div id="paint-color-options">
                <p className="spray"> <button onClick={handleColorSelection} type="submit" value="blue" id="blue-button" className="paint-sample"></button>
                <button onClick={handleColorSelection} type="submit" value="red" id="red-button" className = "paint-sample"></button>
                <button onClick={handleColorSelection} type="submit" value="green" id="green-button" className="paint-sample"></button>
                <button onClick={handleColorSelection} type="submit" value="yellow" id="yellow-button" className="paint-sample"></button>
                <input name="Color Picker" type="color" id="custom-color-button" className="paint-sample"/>
                
                </p>
            </div>
            <div id="save-clear-options">
                <button onClick={handleSaveDrawing} type="submit" value="true" className="sq-button"><i class="far fa-save"></i></button>
                <button onClick={handleClearDrawing} type="submit" value="true" className="sq-button"><i class="fas fa-trash-alt"></i></button>
            
            </div>
            
            <div id="spray-width-options">
                <button onClick={handleSprayWidth} type="submit" value="10" id="small-spray" className="spraybottle" ></button>
                <button onClick={handleSprayWidth} type="submit" value="20" id="medium-spray" className="spraybottle" ></button>
                <button onClick={handleSprayWidth} type="submit" value="35" id="large-spray" className="spraybottle" ></button>                    
            </div>
            
        </div>
        </React.Fragment>
      )
    }

// const SprayOptions = () => {
//     return (
//         <React.Fragment>
//         <div className="spray">
//         <p className="spray"> Spray paint color: <button onClick={handleColorSelection} type="submit" value="blue" id="blue-button" className="paint-sample"></button>
//         <button onClick={handleColorSelection} type="submit" value="red" id="red-button" className = "paint-sample"></button>
//         <button onClick={handleColorSelection} type="submit" value="green" id="green-button" className="paint-sample"></button>
//         <button onClick={handleColorSelection} type="submit" value="yellow" id="yellow-button" className="paint-sample"></button>
//       </p>
//       </div>
//       <div>
//         Spray width: <button onClick={handleSprayWidth} type="submit" value="10" id="small-spray" className="spraybottle" ></button>
//         <button onClick={handleSprayWidth} type="submit" value="20" id="medium-spray" className="spraybottle" ></button>
//         <button onClick={handleSprayWidth} type="submit" value="35" id="large-spray" className="spraybottle" ></button>
        

//       </div>
//       <div>
//         <button onClick={handleSaveDrawing} type="submit" value="true">Save painting</button>
//         <button onClick={handleClearDrawing} type="submit" value="true">Start over</button>
//       </div>
//     </React.Fragment>
//     )
// }
    export default Canvas