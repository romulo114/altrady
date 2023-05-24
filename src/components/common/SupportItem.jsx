import React from "react"
import { PlanCheck } from "../../utils/imgLoader"
import { Image } from "../image"

const SupportItem = ({ title, content, even, features, img }) => {
  return (
    <div className={"row row-reverse" + even}>
      <div className="col-lg-6 col-sm-12 section-item__content-wrapper">
        <h3 className="section-item__title">{title}</h3>
        {content && <p className="section-item__content">{content}</p>}
        {features && (
          <ul>
            {features.map((item, idx) => (
              <li key={idx} className="d-flex">
                <img
                  src={PlanCheck}
                  alt="Altrady"
                  className="section-item__plan-check "
                />
                <p className="section-item__content">{item.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="img-container">
          <Image alt={title} src={img} />
        </div>
      </div>
    </div>
  )
}

export default SupportItem
