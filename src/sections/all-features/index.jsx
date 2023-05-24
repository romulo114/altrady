import React from "react"
import SectionLayout from "../../layouts/SectionLayout"
import FeatureItem from "../../components/common/FeatureItem"

const AllFeatures = ({ featuresData }) => {
  return (
    <SectionLayout sectionName="all-features">
      <div className="cryptor-content-wrapper">
        {featuresData?.map((item, idx) => (
          <FeatureItem
            key={idx}
            even={idx % 2 === 0 ? " flex-row-reverse" : ""}
            tag={item.data.kicker}
            value={item}
          />
        ))}
      </div>
    </SectionLayout>
  )
}

export default AllFeatures
