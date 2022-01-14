import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg"
import logo from "../images/logo.svg";
import { useMediaQuery } from 'react-responsive';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    return(
        <>
        { !isDesktopOrLaptop ?
        <nav className="mobileNav">
        <div className={`icon` } onClick={handleOpen}  >
            <GiHamburgerMenu />
        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className={`content ${open ? "open" : ""}`}>
            <div className="close" onClick={handleClose}>
            <CgClose />
            </div>
        <ul className="inner">
            <li>Home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        </div>
        </nav>
        :
        <nav className="desktopNav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div> 
            <ul className="inner">
            <li>Home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
        </ul>

        </nav>
        }
        
        </>
    );
}
export default Nav