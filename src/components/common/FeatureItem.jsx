import React from "react"
import { Link } from "gatsby"
import { Image } from "../image"

const ActionBtn = ({ btn = "Learn more" }) => (
  <span className="btn-learn-more btn-text-learn text-link">{btn}</span>
)
const FeatureItem = ({ value, tag, even, showCTABtn = true }) => {
  return (
    <div className={"section-item row row-reverse" + even}>
      <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
        {tag && <p className="kicker">{tag}</p>}
        <h3 className="section-item__title">{value.data?.header}</h3>
        <p className="section-item__content">{value.data?.content}</p>
        {showCTABtn && (
          <Link
            to={`/${value.data?.slug}`}
            className="btn btn-second btn-learn"
          >
            <ActionBtn btn={value.data?.btnName} />
          </Link>
        )}
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="img-container">
          <Image alt={value.data?.alt} src={value.data?.icon} />
        </div>
      </div>
    </div>
  )
}

export default FeatureItem
