import React from "react"
import { Image } from "../image"

const ExchangeItem = ({ title, imgSrc }) => {
  return (
    <div className="exchange-item">
      <Image alt={title} src={imgSrc} className="exchange-item__image " />
      <h5 className="exchange-item_title">{title}</h5>
    </div>
  )
}

export default ExchangeItem
