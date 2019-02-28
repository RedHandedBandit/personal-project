import React, {Component} from 'react';
import './Story.css'

class Story extends Component {


    render(){

        return(
            <div className="story_div"> 
                <div className="wrapped_story"> 
                    <div className="moveAll_content"> 
                        <h1 className="h1_story"> OUR STORY </h1>
                        <p className="p_story_text"> 
                            It all began in Miami Florida, USA. Arguably the most colorful, loud, and diverse place in the world. It’s no surprise that the inspiration for VanScotty VISORS came to us there. We saw the potential that visors had. We thought that we could make visors as cool as the people that were wearing them so that’s what we set out to do.
                        </p>

                        <p className="p_story_text">  
                            After going through thousands of prints, hundreds of samples, and multiple manufacturers we created the best visor out there. VanScotty VISORS are the best looking and the most comfortable visors in the world, hands down. We finally created the visor you deserve. You’re welcome. Bienvenidos to the gang. 
                        </p> 

                        <p className="p_story_text">  -VanScotty VISOR Gang </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Story