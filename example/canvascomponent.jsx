import React, { useRef, useEffect } from 'react'

//The browser creates a JavaScript object, known as context, that can interact with the 
//HTML5 Canvas API. A context is unique to its parent element, and can be accessed by 
//using the useContext() method.

const Canvas = props => {

const canvasRef = useRef(null)

//useEffect handles waiting for the component to 'did mount' properly before get the real canvas.
//Right after the canvas element is available in the dom, we want to take its context and draw
useEffect (() => { 

//access the canvas element through the canvasRef. Get a DOM element by giving it a ref prop.
const canvas = canvasRef.current
//Get the DOM canvas element to get its context object
const context = canvas.getContext('2d')

//First drawing
context.fillStyle = '#000000'
context.fillRect(0,0, context.canvas.width, context.canvas.height)

},[])

return <canvas ref = {canvasRef} {...props}/>
}

export default Canvas
