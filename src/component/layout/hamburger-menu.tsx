import './hamburger-menu.css'
import {useState} from 'react'

const HamburgerMenu = () => {
    const [hovered, setHovered] = useState(false)

    return (
        <>
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={event => setHovered(false)} id={"menu_normal"}>
                {!hovered && <>
                        <div id={"mH"}>····</div>
                        <div id={"mE"}>·</div>
                        <div id={"mY"}>-·--</div>
                    </>
                || <div id={"menu_hovered"}>
                        <div id={"H"}>HHHH</div>
                        <div id={"E"}>EEEE</div>
                        <div id={"Y"}>YYYY</div>
                    </div>
                }

            </div>


        </>
    )
}

export {HamburgerMenu}