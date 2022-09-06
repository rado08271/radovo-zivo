import './project-panel.css'
import {useState} from "react";

const ProjectsPanel = () => {
    const [hover, setHover] = useState(false)

    return (
        <div>
            <div onMouseEnter={event => setHover(true)} onMouseLeave={event => setHover(false)} className={"person"}/>
            {hover && <div className={"bio"}>
                Ahoj! <br/>
                <br/>
                My name is Rado, I finished school and would love to get a new challenge. I am very enthusiastic about technology. I love to debate and get new perspectives about controversial and general subjects. I love new challenges which are best described in my past experience. I can be really loyal if you provide great opportunities.<br/>
                <br/>
                I love working on new staff and expanding my knowledge. I am great while working on a team and working alone. I am open to going for a hike, bike or a beer. I love skiing which is the reason why I love winter :). My aim in working with technology is to use it for people benefit<br/>
            </div>}
        </div>
    )
}

export {ProjectsPanel}