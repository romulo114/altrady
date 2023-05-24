import React from "react"
import "../style.scss"

const CoursesHero = ({
  clsName,
  kickerText,
  headerContent,
  sectionContent,
}) => {
  return (
    <section className={clsName}>
      <div className="layout-container text-center">
        <p className="kicker">{kickerText}</p>
        <h1 className="section-title">{headerContent}</h1>
        <p className="section-content">{sectionContent}</p>
      </div>
    </section>
  )
}

export default CoursesHero
