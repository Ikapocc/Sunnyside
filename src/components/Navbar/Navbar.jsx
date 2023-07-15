import React from "react";
import mySvg from "./logo.svg";
import "./Navbar.css"
import Textos from "../TextField/Texts";

export default function Navbar() {
    return(
            <header className="head">
                <div className="header-flex">
                    <img src={mySvg} alt="company icon"></img>

                    <nav className="header-nav" aria-label="primary">
                        <ul className="nav-list">
                            <li className="nav-text" href="#">About</li>
                            <li className="nav-text" href="#">Services</li>
                            <li className="nav-text" href="#">Projects</li>
                            <li className="nav-text" href="#" datatype="focus">Contact</li>
                        </ul>
                    </nav>
                </div>

                <Textos />
            </header>
    )
}