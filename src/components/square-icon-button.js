import React from 'react';

const SquareIconButton = props => {
    return (
        <button 
            onClick={props.handleClick} 
            type="submit" 
            value={props.value} 
            className="sq-button">
            {props.icon}
            </button>
        );
}

export default SquareIconButton