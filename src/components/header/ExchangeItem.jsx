import React from "react"
import { Link } from "gatsby"
import { Image } from "../image"

const ExchangeItem = ({ title, content, slug, image, extraCls = "" }) => {
  return (
    <Link to={`/exchanges/${slug}`} className={"link-non-effect" + extraCls}>
      <div className="feature-item">
        <Image alt={title} src={image} className="feature-item__image " width={40} height={40} />
        <div className="feature-item__content-wrapper">
          <h5 className="feature-item_title">{title}</h5>
          {content && <p className="label feature-item_content">{content}</p>}
        </div>
      </div>
    </Link>
  )
}

export default ExchangeItem
