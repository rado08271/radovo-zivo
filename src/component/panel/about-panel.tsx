import './about-panel.css'
import {SvgIcon} from "@mui/material";
import GithubIcon from "./icons/github-icon";
import EmailIcon from "./icons/email-icon";
import LinkedinIcon from "./icons/linkedin-icon";
import MediumIcon from "./icons/medium-icon";

const AboutPanel = () => {
    return (
        <div>
            <div className={"contact"}>
                <a href={"https://github.com/rado08271"} target={"_blank"}><GithubIcon/></a>
                <a href={"https://www.linkedin.com/in/radoslav-figura/"} target={"_blank"}><LinkedinIcon/></a>
                <a href={"https://medium.com/@figura.radoslav"} target={"_blank"}><MediumIcon/></a>
                <a href={"mailto:figura.radoslav@gmail.com?subject='Rado Zivo Contact'"}><EmailIcon/></a>
            </div>
            <div className={"code_base"}>
                <a href={"https://github.com/rado08271/radovo-zivo"} target={"_blank"   }>... checkout on git {"</>"}</a>
            </div>
        </div>
    )
}

export {AboutPanel}