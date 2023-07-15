import React from "react";
import mySvg from "../Navbar/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Insta from "../images/icon-instagram.svg";
import "./Footer.css"

export default function Footer() {
    return(
        <footer>
            <img src={mySvg} alt="Logo footer"></img>
            <nav className="nav-footer">
                <ul className="list-footer">
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </nav>

            <ul className="socials" role="list">
                <li><a><img src={Facebook}></img></a></li>
                <li><a><img src={Insta}></img></a></li>
                <li><a><img src={Twitter}></img></a></li>
                <li><a><img src={Pinterest}></img></a></li>
            </ul>
        </footer>
    )
}