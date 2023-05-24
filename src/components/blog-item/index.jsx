import React from "react"
import { Link } from "gatsby"
import { Image } from "../image"

const BlogItem = ({ data, categories, size, clsName }) => {
  const { title, summary, date, thumbnail, category, slug } = data
  let color = ""
  let type = ""
  categories &&
    categories.forEach(item => {
      if (item.prismicId === category?.id) {
        color = item.data.color
        type = item.data.name
      }
    })
  return (
    <div className={"item " + size + clsName}>
      <Link to={`/blog/${slug}`}>
        <div className="img-overlay-container position-relative">
          <Image
            alt={thumbnail?.alt}
            src={thumbnail}
            className="item__img w-100 "
          />
        </div>
        <p className={"caption item__type " + color}>{type}</p>
        <h2 className="item__title">{title}</h2>
      </Link>
      {size === "large " && <p className="item__content">{summary}</p>}
      <p className="caption item__time color-tertiary">{date}</p>
    </div>
  )
}

export default BlogItem
