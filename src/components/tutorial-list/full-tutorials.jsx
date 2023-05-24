import React from "react"
import { Link } from "gatsby"
import { VideoPlay } from "../../utils/imgLoader"
import { Image } from "../image"

const TutorialList = ({ tutorialData }) => {
  return (
    <div className="video-list">
      {tutorialData.map((item, idx) => (
        <div key={idx} role="listitem" className="w-dyn-item">
          <Link
            to={`/academy/${item.data.slug}`}
            className="video-item w-inline-block"
          >
            <div className="video-item-left pr-2">
              <Image src={VideoPlay} alt="Play Button" />
              <div className="video-name">{item.data.name}</div>
            </div>
            <div className="video-duration">{item.data.duration}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default TutorialList
