import React from "react"
import { Image } from "../../components/image"
import { ExchangesHero } from "../../utils/imgLoader"

const kickerText = `MULTIPLE EXCHANGES. ONE PLATFORM`
const sectionContent = `You can choose from one of the top bitcoin cryptocurrency exchanges.
Altrady does not stop here and continues his development by integrating with more bitcoin cryptocurrency exchanges soon.`
const headerContent = `Our Top Bitcoin & Altcoin Cryptocurrency Exchange Partners`

const ExchangeHeroSection = () => {
  return (
    <section className="section hero light-bk">
      <div className="layout-container">
        <div className="row row-reverse">
          <div className="col-lg-6 left-part">
            <p className="kicker">{kickerText}</p>
            <h1 className="section-title">{headerContent}</h1>
            <p className="section-content">{sectionContent}</p>
            <div className="btn-container">
              <a
                href="https://app.altrady.com/dashboard#/signup"
                className="btn btn-primary "
              >
                Try for Free
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="hero-img-container ">
              <Image src={ExchangesHero} alt={headerContent} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExchangeHeroSection
