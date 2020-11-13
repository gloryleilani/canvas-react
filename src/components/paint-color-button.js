import React from 'react';

const PaintColorButton = props => {
    return (

        <button 
            onClick={props.choosePaintColor} 
            type="submit" 
            value={props.value} 
            id={props.id}
            className="paint-sample"></button>
        
        );
} 

export default PaintColorButton

