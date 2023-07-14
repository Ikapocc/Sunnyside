import React from "react";
import "./Divs.css"

export default function Divisors(props) {
    return(
        <>
            <div className="mid-text">
                <h2 className="title">{props.title}</h2>
                <p className="description">{props.description}</p>
                <p className="learn">{props.learn}</p> 
            </div>

            <img src={props.imgs} alt={props.imgs}></img>
        </>
    )
}

export function DivImgText(props) {
    return(
        <div className={`bottom-text ${props.ClassName}`}>
            <h3 className="bttm-title">{props.title}</h3>
            <p className="bttm-description">{props.description}</p>
        </div>
    )
}