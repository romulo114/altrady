import React from "react"
import { Link } from "gatsby"
import { Image } from "../image"

const ActionBtn = ({ url, btn = "Find out more" }) => (
  <Link className="find-more btn-text text-link" to={url}>
    {btn}
  </Link>
)

const PeopleSayingItem2 = ({ imgSrc, title, content, url, btn }) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="people-saying-item second">
        <div className="text-center">
          <Image alt={title} src={imgSrc} className="people-saying-item__img " width={192} height={192} />
        </div>
        <h4 className="title">{title}</h4>
        <p className="content">{content}</p>
        <ActionBtn url={url} btn={btn} />
      </div>
    </div>
  )
}

export default PeopleSayingItem2
