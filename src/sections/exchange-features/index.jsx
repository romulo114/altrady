import React from "react"
import ExchangeFeature from "../../components/common/ExchangeFeatureItem"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"

const ExchangeFeatures = ({ title, content, featuresListData }) => {
  return (
    <SectionLayout sectionName="cryptor">
      <SectionHeader title={title} content={content} />
      <div className="cryptor-content-wrapper">
        {featuresListData?.map((item, idx) => (
          <ExchangeFeature
            key={idx}
            even={idx % 2 === 0 ? " flex-row-reverse" : ""}
            value={item}
          />
        ))}
      </div>
    </SectionLayout>
  )
}

export default ExchangeFeatures
