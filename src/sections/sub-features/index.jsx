import React from "react"
import SectionLayout from "../../layouts/SectionLayout"
import FeatureDetail from "../../components/common/FeatureDetail"

const SubFeatures = ({ featuresData }) => {
  return (
    <SectionLayout sectionName="all-features">
      <div className="cryptor-content-wrapper">
        {featuresData?.map((item, idx) => (
          <FeatureDetail
            key={idx}
            even={idx % 2 === 0 ? " flex-row-reverse" : ""}
            tag={item.kicker}
            {...item}
          />
        ))}
      </div>
    </SectionLayout>
  )
}

export default SubFeatures
