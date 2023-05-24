import React from "react"
import { Link } from "gatsby"
import { Image } from "../image"

const CategoryItem = ({ title, content, slug, imgSrc, extraCls = "" }) => {
  return (
    <Link to={`/blog/${slug}`} className={"link-non-effect" + extraCls}>
      <div className="feature-item">
        <Image alt={title} src={imgSrc} className="feature-item__image " />
        <div className="feature-item__content-wrapper">
          <h5 className="feature-item_title">{title}</h5>
          {content && <p className="label feature-item_content">{content}</p>}
        </div>
      </div>
    </Link>
  )
}

export default CategoryItem
