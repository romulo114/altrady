import React from "react"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"

const title = `Exclusive Videos to Help You Learn Trading Faster`
const content = `We have prepared exclusive videos only for you, our Altrady user, to access. Through these videos, you can learn trading faster and become successful in this venture. Our team is developing more contents to help you with trading strategy and decision-making.`
const ExclusiveVideoSection = () => {
  return (
    <SectionLayout sectionName="exclusive-video">
      <SectionHeader title={title} content={content} />

      <div className="section-body">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/BSj2alTaoTg?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.altrady.com"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen=""
            data-gtm-yt-inspected-11527755_89="true"
            id="957917640"
            data-gtm-yt-inspected-1_25="true"
            title="Why Altrady"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </SectionLayout>
  )
}

export default ExclusiveVideoSection
