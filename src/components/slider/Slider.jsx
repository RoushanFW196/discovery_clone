import "./slider.css"
import { Playbtn } from '../playbutton/Playbtn';

export const Slider = ({imgs}) => {
    return <div className="item">
        <div id="play"><Playbtn/></div>

        <img id="im" src={imgs}/>
    </div>;
}