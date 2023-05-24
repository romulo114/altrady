import React from "react"
import { Image } from "../image"

const ComparisonContent = ({ kickerText, title, content, img, alt }) => {
  return (
    <div className="layout-container member">
      <div className="text-center">
        <p className="kicker">{kickerText}</p>
        <h2 className="section-title">{title}</h2>
        {content && <p className="section-content">{content}</p>}
        <div className="compare-img-container">
          <Image src={img} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default ComparisonContent
