import React from "react"
import { Image } from "../image"

const UpcomingSupportItem = ({ name, icon, short_description, slug }) => {
  return (
    <div className="col-lg-6">
      <div className="item">
        <div className="d-flex">
          <Image alt={name} src={icon} className="item__img " />
          <h3 className="item__title d-flex align-items-center">{name}</h3>
        </div>
        <p className="item__content">{short_description}</p>
      </div>
    </div>
  )
}

export default UpcomingSupportItem
