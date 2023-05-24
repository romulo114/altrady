import React from "react"

const LevelUpCTASection = ({ title, description, button, clsName, bk, to }) => {
  return (
    <div className={"section-cta level-up " + clsName + bk}>
      <div className="member">
        <h2 className="title">{title}</h2>
        <p className="lead-text">{description}</p>
        <a href={to} className={"btn btn-second " + clsName}>
          {button}
        </a>
      </div>
    </div>
  )
}

export default LevelUpCTASection
