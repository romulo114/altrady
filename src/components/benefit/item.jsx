import React from "react"
import { Image } from "../image"

const BenefitItem = ({ title, content, image }) => {
  return (
    <div className="benefit-item col-lg-4 col-sm-6">
      <Image
        alt={title}
        src={image}
        className="benefit-item__image "
        width={80}
        height={80}
      />
      <h3 className="benefit-item__title">{title}</h3>
      <p className="benefit-item__content">{content}</p>
    </div>
  )
}

export default BenefitItem
