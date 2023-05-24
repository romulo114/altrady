import React from "react"
import { Link } from "gatsby"
import LinkSecondBtn from "../../components/common/LinkSecondBtn"
import { Image } from "../image"

const ActionBtn = ({ btn = "Learn more" }) => (
  <span className="btn-learn-more btn-text-learn text-link">{btn}</span>
)
const FeatureItem = ({ value, even }) => {
  const { kicker, title, text, feature_slug, btn_name, feature_image } = value
  return (
    <>
      {title && (
        <div>
          <div className={"section-item row row-reverse" + even}>
            <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
              {kicker && <p className="kicker">{kicker}</p>}
              {title && <h3 className="section-item__title">{title}</h3>}
              {text && <p className="section-item__content">{text}</p>}
              {btn_name && (
                <Link
                  to={`/${feature_slug}`}
                  className="btn btn-second btn-learn"
                >
                  <ActionBtn btn={btn_name} />
                </Link>
              )}
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="img-container">
                {feature_image && (
                  <Image alt={feature_image.alt} src={feature_image} />
                )}
              </div>
            </div>
          </div>
          <div className="text-center btn-container">
            <LinkSecondBtn to="/features"> See all features </LinkSecondBtn>
          </div>
        </div>
      )}
    </>
  )
}

export default FeatureItem
