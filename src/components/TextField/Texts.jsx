import React from "react";
import "./Texts.css"
import arrow from "./icon-arrow-down.svg"

export default function Textos() {
    return(
        <div className="texts">
            <h1>WE ARE CREATIVES</h1>
            <img className="arrow" src={arrow} alt="arrow"></img>
        </div>
    )
}