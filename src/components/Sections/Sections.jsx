import Egg from "../images/desktop/image-transform.jpg"
import Cup from "../images/desktop/image-stand-out.jpg"
import Divisors, { DivImgText } from "../Divisors.jsx/Divs"
import "./Sections.css"

export default function Sections() {
    return (
    <>
        <section className="column">
          <Divisors 
            title = {"Transform your brand"}
            description = {"We are a full-service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you"}
            learn = {"LEARN MORE"}
            imgs = {Egg}
          />
        </section>

        <section className="column special-columns">
          <Divisors
            imgs = {Cup}
            title = {"Stand out to the right audience"}
            description = {"Using a collaborite formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places"}
            learn = {"LEARN MORE"}
          />
        </section>

        <section className="column">
          <DivImgText 
            ClassName = {"graphic"}
            title = {"Graphic Desing"}
            description = {"Great desing makes you memorable. We deliver artwork that underscores your brand message and captures potencial clients' attention"}
          />
          <DivImgText
            ClassName = {"photo"}
            title = {"Photography"}
            description = {"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
          />
        </section>
    </>
    )
}