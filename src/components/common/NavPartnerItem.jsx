import React from "react"
import { Image } from "../image"

const NavFeatureItem = ({ title, slug, content, imgSrc }) => {
  return (
    <a href={slug} className="link-non-effect">
      <div className="feature-item col-sm-6 col-lg-12">
        <Image alt={title} src={imgSrc} className="feature-item__image " />
        <div className="feature-item__content-wrapper">
          <h5 className="feature-item_title">{title}</h5>
          {content && <p className="label feature-item_content">{content}</p>}
        </div>
      </div>
    </a>
  )
}

export default NavFeatureItem
