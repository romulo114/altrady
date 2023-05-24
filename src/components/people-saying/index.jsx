import React from "react"
import { Image } from "../image"

const PeopleSayingItem = ({ content, imgSrc }) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="people-saying-item">
        <Image
          alt="Testimonial"
          src={imgSrc}
          width={100}
          height={100}
          className="people-saying-item__img"
        />
        <p className="people-saying-item__content">{content}</p>
      </div>
    </div>
  )
}

export default PeopleSayingItem
