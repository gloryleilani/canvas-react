import React from 'react';

const ReticleButton = props => {

    return (
        <button 
            onClick={props.chooseReticle} 
            type="submit" 
            value={props.value}
            id={props.id} 
            className="spraybottle"></button>
     
    );
}

export default ReticleButton
               

