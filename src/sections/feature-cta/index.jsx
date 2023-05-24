import React from "react"
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
} from "../../utils/imgLoader"
import { Image } from "../../components/image"

const sectionData = [
  {
    imgSrc: Feature1,
    href: "https://coinidol.com/altrady-software-trading/",
  },
  {
    imgSrc: Feature2,
    href:
      "https://cryptopotato.com/altrady-cryptocurrency-trading-platform-that-makes-things-easier/",
  },
  {
    imgSrc: Feature3,
    href: "https://www.benzinga.com/money/altrady-review/",
  },
  {
    imgSrc: Feature4,
    href: "https://blockonomi.com/altrady-review/",
  },
  {
    imgSrc: Feature5,
    href:
      "https://www.newsbtc.com/news/company/altrady-a-review-of-the-super-fast-multi-exchange-crypto-trading-and-portfolio-management-software/",
  },
]

const FeatureCTASection = () => {
  return (
    <div className="section-cta as-featured-in">
      <div className="layout-container text-center">
        <h2 className="title">Altrady in the news</h2>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {sectionData.map(({ imgSrc, href }, idx) => (
            <a
              href={href}
              key={idx}
              className="feature-img"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <Image alt="featured in" src={imgSrc} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeatureCTASection
