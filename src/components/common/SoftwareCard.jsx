import React from "react"
import { Image } from "../image"
const SoftwareCard = ({ os, os_description, img, cta_text, clsName, url }) => {
  return (
    <div className={clsName}>
      <div className="software-card">
        <Image alt={os} src={img} className="benefit-item__image " />
        <h3 className="os">{os}</h3>
        <p className="description">{os_description}</p>
        <a href={url} className="btn-text open-now text-link center-align">
          {cta_text}
        </a>
      </div>
    </div>
  )
}

export default SoftwareCard
