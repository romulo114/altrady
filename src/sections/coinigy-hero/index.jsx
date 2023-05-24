import React from "react"
import { Image } from "../../components/image"

const CoinigyHero = ({
  clsName,
  kickerText,
  headerContent,
  sectionContent,
  heroImg,
}) => {
  return (
    <section className={clsName}>
      <div className="coinigy-layout">
        <div className="text-center">
          <h1 className="kicker txt-blue">{kickerText}</h1>
          <h1 className="section-title">{headerContent}</h1>
          <p className="section-content">{sectionContent}</p>
          <div className="d-flex justify-content-center">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className={"btn btn-primary my-4"}
            >
              Join Altrady
            </a>
          </div>
        </div>
        <div className="hero-img-container ">
          <Image src={heroImg} alt="Altrady Crypto Platform" />
        </div>
      </div>
    </section>
  )
}

export default CoinigyHero
