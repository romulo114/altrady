import React from "react"
import FeatureOther from "../../components/feature"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"

const FeatureOthers = ({ title, featureOthers }) => {
  return (
    <SectionLayout sectionName="benefit">
      <SectionHeader title={title} />
      <div className="row item-container">
        {featureOthers?.map((item, idx) => (
          <FeatureOther key={idx} {...item} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default FeatureOthers
