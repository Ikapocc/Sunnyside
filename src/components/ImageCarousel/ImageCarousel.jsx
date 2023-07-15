import React from "react";
import Imgs from "../ImageComponent/image";
import Milk from "../images/desktop/image-gallery-milkbottles.jpg"
import Orange from "../images/desktop/image-gallery-orange.jpg"
import Cone from "../images/desktop/image-gallery-cone.jpg"
import Sugar from "../images/desktop/image-gallery-sugarcubes.jpg"
import "./ImageCarousel.css"

export default function Carouselimg() {
    return(
        <div className="mini-carousel">
            <Imgs 
                img = {Milk}
            />
            <Imgs 
                img = {Orange}
            />
            <Imgs 
                img = {Cone}
            />
            <Imgs 
                img = {Sugar}
            />
        </div>
    )
}