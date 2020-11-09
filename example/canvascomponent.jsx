import React, { useRef } from 'react'

const Canvas = props => {

const canvasRef = useRef(null)


useEffect (() => { 
//access the canvas element through the canvasRef
const canvas = canvasRef.current
const context = canvas.getContext('2d')

//First draw
context.fillStyle = '#000000'
context.fillRect(0,0, context.canvas.width, context.canvas.height)

},[])

return <canvas ref = {canvasRef} {...props}/>
}

export default Canvas
