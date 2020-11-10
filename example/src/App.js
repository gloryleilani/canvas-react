//import React from 'react';
//import Canvas from 'canvascomponent'

import React, { useRef, useEffect } from 'react'
import './App.css';

//Canvas is an HTML element used to draw graphics on a web page. 
//The element is a container for the graphics; Javascript is used to 
//“draw” the graphics onto the canvas.
//With React, each component owns its node, as opposed to canvas where 
//there is only one shared node used for drawing. 

//Normally in React a ref isn't needed to make an update, but the canvas 
//is not like other DOM elements. Most DOM elements have a property like 
//value that allows for updating directly. The canvas works with a context 
//that allows drawing things. For that we have to use a ref, which is a 
//reference to the actual canvas DOM element.

// Use a React reference to access the canvas DOM node, and to retrieve a 
//2D context from it; then call the drawing methods.

//Custom type to store the mouse cursor coordinates
type Coordinates = {
  x: number;
  y: number;
};


//Rendering everything in the main App.js component, although the canvas 
//element can be housed in any standard React.js component.
//The application will render the canvas element, and will allow drawing.
function App() {

  // const draw = ctx => {
  //   //First drawing
  //   ctx.fillStyle = '#000000';
  //   ctx.beginPath();
  //   ctx.arc(50,100,20,0,2*Math.PI);
  //   ctx.fill();
  //   //ctx.fillRect(0,0, context.canvas.width, context.canvas.height)
  // }

  return (
    // <Canvas draw={draw} />
    <div>
      <Canvas />
    </div>
  );
}

//useCanvas is a custom hook which returns the canvasRef
//Usually, big components are split into several child components in React, but it's
//not possible with canvas as there is only one canvas node.

const useCanvas = () => {
// ignore: const useCanvas = draw => {
  
  const canvasRef = useRef(null)
  const [paintColor, setPaintColor] = React.useState(null);


  //useEffect handles waiting for the component to 'did mount' properly before get the real canvas.
  //Right after the canvas element is available in the dom, we want to take its context and draw.
  useEffect (() => { 

    //access the canvas element through the canvasRef. Get a DOM element by giving it a ref prop.
    const canvas = canvasRef.current

    //Get the DOM canvas element to get its context object
    //A reference to the canvas context(2d) object is assigned to the context variable that allows 
    //us to interact with properties in the HTML5 Canvas API.
    //Cretes a drawing object for our canvas. This drawing object is what we’ll be drawing on.
    const context = canvas.getContext('2d')

    //Not working yet:
    const img = new Image()
    img.src = "./src/brickwall.jpg";
    img.onload = () => {
      context.drawImage(img, 0, 0, 500, 400)
    };      
    

    //Store status of mouse button. Track the mouse coordinates.
    //Horizontal and vertical offsets ensure our drawing occurs at the tip 
    //of the mouse cursor.
    let mouseDown: boolean = false;
    let start: Coordinates = { x:0, y:0 };
    let end: Coordinates = { x:0, y:0 };
    let canvasOffsetLeft: number = 0;
    let canvasOffsetTop: number = 0;

    //Event handlers attached to the canvas element
    //We only draw if the mouse button is down. 
    //handleMouseDown captures initial coordinates of cursor for later use. 
    function handleMouseDown(evt: MouseEvent) {
      mouseDown = true;
      // draw(evt);
      
      // start = {
      //   x: evt.clientX = canvasOffsetLeft,
      //   y: evt.clientY = canvasOffsetTop,
      // };

      // end = {
      //   x: evt.clientX = canvasOffsetLeft,
      //   y: evt.clientY = canvasOffsetTop,
      // };

    }

    function handleMouseUp(evt: MouseEvent) {
      mouseDown = false;
      //ctx.beginPath();
    }

    //handleMouseMove does the actual work of drawing to the canvas.
    function handleMouseMove(evt: MouseEvent) {

      if (mouseDown) {

        start = {
          x: end.x,
          y: end.y,
        };

        // start = {
        //   x: evt.clientX - canvasOffsetLeft,
        //   y: evt.clientY - canvasOffsetTop,
        // };

        end = {
          x: evt.clientX - canvasOffsetLeft,
          y: evt.clientY - canvasOffsetTop,
        };

        //Draw path
        context.strokeStyle = '#00f';
        context.lineCap = 'round';
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
        context.closePath();

      }
    }

    canvasRef.current.addEventListener('mousedown', handleMouseDown);
    canvasRef.current.addEventListener('mouseup', handleMouseUp);
    canvasRef.current.addEventListener('mousemove', handleMouseMove);
    canvasOffsetLeft = canvasRef.current.offsetLeft;
    canvasOffsetTop = canvasRef.current.offsetTop;

    //<button onClick={(evt) => setPaintColor(evt.target.value) }/>


    //Using the context reference variable, we can set properties needed to render our canvas background.
    // draw(context)
    // },[draw]) //Close useEffect 
    },[])

  return (
    canvasRef 
  )
}



//The browser creates a JavaScript object, known as context, that can interact with the 
//HTML5 Canvas API. A context is unique to its parent element, and can be accessed by 
//using the useContext() method.

//Define canvas component
const Canvas = props => {

  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);
  //ignore: const imageRef = useImage(draw);
  

    return ( 
          <div>
            <canvas 
              id="canvas"
              ref={canvasRef} 
              width={500}
              height={400}
              style={{
                border: '2px solid #000',
                marginTop: 10,
                
              }}

              {...rest}/>
            <img src="/brickwall.jpg" width={500} height={400}/>
            </div>
          )
        }

        //ignore: <img ref={imageRef} src={brickwall} className="hidden" /> 

//button style='position:absolute; top:50px; left:100px; zindex:2'

//export default Canvas

//Canvas id, width and height:
//<canvas id="myCanvas" width="578" height="200"></canvas>

//Upon event click (trash can icon), clear the canvas. 
// const handleClearCanvas = (event) => {
//   setCoordinates([]);
//  };

function ClearCanvas() {

  //const 

}


//Upon event click (camera icon), save canvas to image file on computer
//ctx.save()

//Upon event click (3 spray paint dot size icons), change line width to correspond with user selection.
//context.lineWidth = 2;   
//context.lineWidth = 4;
//context.lineWidth = 6;





//Upon event click (spray paint color icon for red, green, yellow and blue), change line color.
//context.strokeStyle = '#ff0000';
//context.stroke();


//Make cursor into something else using css: 
//<body><head><style>
//.url {cursor: url(myBall.cur),auto;}
//</style></head></body>
//<p class="url">hi</p> 
//When mouse over the paragraph text, it changes the cursor into a ball


export default App;
