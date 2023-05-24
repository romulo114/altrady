import React from "react"
import { Image } from "../../components/image"

const MemberHero = ({ kickerText, headerContent, sectionContent, img }) => {
  return (
    <section className="section member">
      <div className="member">
        {kickerText && <p className="kicker">{kickerText}</p>}
        <h1 className="section-title">{headerContent}</h1>
        <p className="section-content">{sectionContent}</p>
        <div className="hero-img-container mt-95">
          <Image src={img} alt={headerContent} />
        </div>
      </div>
    </section>
  )
}

export default MemberHero
