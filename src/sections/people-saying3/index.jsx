import React from "react"
import SectionHeader from "../../components/common/SectionHeader"
import TestmonialCard3 from "../../components/common/TestmonialCard3"
import SectionLayout from "../../layouts/SectionLayout"
import SupportItem from "../../components/common/SupportItem"
import { Track } from "../../utils/imgLoader"

const item = {
  title: `Altrady Gives You Lots of Benefits for a Huge Trading Advantage`,
  features: [
    {
      content: `Save Time with an Easy Trading Interface`,
    },
    {
      content: `Keep Track of Assets with an Automatic Portfolio`,
    },
    {
      content: `Earn Consistent Profits with Innovative Trading Tools`,
    },
    {
      content: `Minimize Risks with Trading Analytics`,
    },
    {
      content: `Get Winning Trades with Fast & Accurate Alerts`,
    },
  ],
  img: Track,
}

const PeopleSayingSection3 = ({
  showHeader = true,
  extraClsName = "",
  title,
  content,
  testimonial,
  username,
  position,
  img,
  landing,
}) => {
  return (
    <SectionLayout sectionName={"people-saying-third " + extraClsName}>
      {showHeader && <SectionHeader title={title} content={content} />}

      <div className="row text-center testimonial-wrapper">
        <TestmonialCard3
          review={testimonial}
          imgSrc={img}
          name={username}
          position={position}
        />
      </div>
      {landing && (
        <div className="altrady-subscribe cryptor-content-wrapper">
          <SupportItem even={" v"} {...item} />
        </div>
      )}
    </SectionLayout>
  )
}

export default PeopleSayingSection3
