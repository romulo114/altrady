import React from "react"
import { Link } from "gatsby"
import { VideoPlay } from "../../utils/imgLoader"
import { secToHMS } from "../../utils"
import { Image } from "../image"

const TutorialList = ({ courseId, tutorialData }) => {
  const eachCourse = tutorialData.filter(
    item => item.data.category.id === courseId
  )
  const tutorialList = eachCourse.slice(0, 5)
  const totalSec = eachCourse
    .map(item =>
      item.data.duration.split(":").reduce((acc, time) => 60 * acc + +time)
    )
    .reduce((total, sec) => total + sec)
  return (
    <>
      <p className="course-list__info">
        <span className="course-cnt mr-3">
          {eachCourse.length} {eachCourse.length === 1 ? "video" : "videos"}
        </span>
        <span className="course-time">{secToHMS(totalSec)}min</span>
      </p>
      <div className="video-list">
        {tutorialList.map((item, idx) => (
          <div key={idx} role="listitem" className="w-dyn-item">
            <Link
              to={`/academy/${item.data.slug}`}
              className="video-item w-inline-block"
            >
              <div className="video-item-left pr-2">
                <Image
                  src={VideoPlay}
                  alt="Play Button"
                  width={15}
                  height={15}
                />
                <div className="video-name">{item.data.name}</div>
              </div>
              <div className="video-duration">{item.data.duration}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default TutorialList
