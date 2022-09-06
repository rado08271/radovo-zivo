import { makeStyles } from '@material-ui/core';
import {Memphis} from "../layout/memphis/memphis";
import {HamburgerMenu} from "../layout/hamburger-menu";
import {MainPanelMessageContainer} from "../layout/main-panel-message-container";
import {MainPanelMessageStart} from "../layout/main-panel-message-start";
import React from "react";
import './main-panel.css'

// const style = makeStyles((theme) => ({
//     container: {
//         width: "100%",
//         background: "#E9EDC9"
//     },
// }))

const MainPanel = () => {
    return (
        <div >
            <div className={"app_top_right"}>
                <Memphis />
            </div>
            <div className={"menu_bar"}>
                <HamburgerMenu/>
            </div>
            <div className={"main-container"}>
                <MainPanelMessageContainer/>
            </div>
            <div className={"main-container-start-button"}>
                <MainPanelMessageStart/>
            </div>

        </div>
    )
}

export { MainPanel }