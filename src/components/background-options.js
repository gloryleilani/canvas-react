
import { checkPropTypes } from 'prop-types';
import React from 'react';

import brickwall1 from "./images/backgrounds/brickwall1.jpg"
import brickwall2 from "./images/backgrounds/brickwall2.jpg"
import brickwall3 from "./images/backgrounds/brickwall3.jpg"
import brickwall4 from "./images/backgrounds/brickwall4.jpg"
import brickwall5 from "./images/backgrounds/brickwall5.jpg"
import brickwall6 from "./images/backgrounds/brickwall6.jpg"
import brickwall7 from "./images/backgrounds/brickwall7.jpg"
import brickwall8 from "./images/backgrounds/brickwall8.jpg"
import brickwall9 from "./images/backgrounds/brickwall9.jpg"


const BackgroundButton = props => {

    return (
        <img
            onClick={props.updateBackground} 
            type="submit" 
            value={props.imgSrc} 
            id={props.id}
            className="background-options-button"
            src={props.imgSrc} 
            alt={props.imgSrc} />
            
        );
} 

const BackgroundOptions = () => {

    const backgroundComponents = []; 
    
    for (let i=1; i<10; i++) {
        backgroundComponents.push(
            <BackgroundButton 
                id={i}
                key={i}
                // img= />
                imgSrc={`brickwall${i}`} />
        );
        console.log("i",i)
    }; 
    console.log("backgroundComponents:", backgroundComponents)
    return (
        <div className="brick-backgrounds-panel">
            <p>To start over with a new brick background, select from below:</p>
            {backgroundComponents}
            <img src = "brickwall9"/> 
        </div>
    );
}

export default BackgroundOptions

    // selectedWall = onclick on a wall option, grab (e.target.value)
    // setBackgroundWall(selectedWall);
    // }
