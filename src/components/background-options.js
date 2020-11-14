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
        <React.Fragment>
            <img
                onClick={props.updateBackground} 
                type="submit" 
                value={props.id} 
                id={props.id}
                className="background-options-button"
                src={props.id}
                alt={props.id} />
        </React.Fragment>
        );
} 
const backgrounds = [brickwall1, brickwall2, brickwall3, brickwall4, brickwall5, brickwall6, brickwall7, brickwall8, brickwall9]

const BackgroundOptions = (props) => {

    const backgroundComponents = []; 
    
    let i = 1
    // for (let i=1; i<10; i++) {
        for (const currentImg of backgrounds) {
            backgroundComponents.push(
                <BackgroundButton 
                key={`brickwall${i}`}
                id={currentImg}
                updateBackground={props.updateBackground}
                />
            );
            i+=1;
    }; 
    return (
        <div className="brick-backgrounds-panel">
            <p>To start over with a new brick background, select from below:</p>
            {backgroundComponents}
        </div>
    );
}

export default BackgroundOptions

    // selectedWall = onclick on a wall option, grab (e.target.value)
    // setBackgroundWall(selectedWall);
    // }
