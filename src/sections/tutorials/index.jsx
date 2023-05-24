import React, { useState } from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import SectionLayout from "../../layouts/SectionLayout"
import htmlSerializer from "../../utils/htmlSerializer"
import { VideoPlay } from "../../utils/imgLoader"
import { Image } from "../../components/image"

const TutorialSection = ({ currentTutorial, tutorialList }) => {
  const [play, setPlay] = useState(false)
  const showVideo = () => {
    setPlay(true)
  }
  return (
    <SectionLayout sectionName="courses">
      <div className="__breadcrumb mb-3">
        <Link to="/academy" className="pr-2">
          Academy
        </Link>
        /
        <Link to={`/academy/${currentTutorial?.slug}`} className="pl-3">
          {currentTutorial?.name}
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <div className="video-details">
            <h1 className="video-name-video">{currentTutorial?.name}</h1>
            <div className="html-embed w-embed">
              <div className="wrapper">
                <div
                  className="youtube"
                  data-embed={currentTutorial?.video_embed}
                  onClick={showVideo}
                  onKeyDown={showVideo}
                  role="button"
                  tabIndex="0"
                  aria-label="Play Button"
                >
                  {play ? (
                    <iframe
                      title={currentTutorial?.name}
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay"
                      src={`https://www.youtube.com/embed/${currentTutorial?.video_embed}?rel=0&amp;showinfo=0&amp;autoplay=1&mute=1`}
                    ></iframe>
                  ) : (
                    <>
                      <div
                        className="play-button"
                        onClick={showVideo}
                        onKeyDown={showVideo}
                        role="button"
                        tabIndex="0"
                        aria-label="Play Button"
                      ></div>
                      <Image
                        src={`https://img.youtube.com/vi/${currentTutorial?.video_embed}/sddefault.jpg`}
                        alt={currentTutorial?.name}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="tutorial-content">
              <h3>Tutorial Description</h3>
              <RichText
                render={currentTutorial?.description.raw}
                serializeHyperlink={htmlSerializer}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <h3 className="heading">Tutorials:</h3>
          <div className="video-list">
            {tutorialList.map((item, idx) => (
              <div key={idx} role="listitem" className="w-dyn-item">
                <Link
                  to={`/academy/${item.data.slug}`}
                  className={`video-item w-inline-block ${
                    item.data.slug === currentTutorial.slug && "current-item"
                  }`}
                  onClick={() => setPlay(false)}
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
        </div>
      </div>
    </SectionLayout>
  )
}

export default TutorialSection
