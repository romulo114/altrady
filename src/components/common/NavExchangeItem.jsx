import { Link } from "gatsby"
import React from "react"
import { Image } from "../image"

const NavExchangeItem = ({ title, content, imgSrc, slug, extraCls = "" }) => {
  return (
    <Link to={`/exchanges/${slug}`} className={"link-non-effect" + extraCls}>
      <div className="feature-item col-sm-6 col-lg-12">
        <Image alt={title} src={imgSrc} className="feature-item__image " />
        <div className="feature-item__content-wrapper">
          <h5 className="feature-item_title">{title}</h5>
          {content && <p className="label feature-item_content">{content}</p>}
        </div>
      </div>
    </Link>
  )
}

export default NavExchangeItem
