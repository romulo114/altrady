import React from "react"
import BenefitItem from "../../components/benefit/item"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"

const BenefitSection = ({ title, content, benefitSectionData }) => {
  return (
    <SectionLayout sectionName="benefit">
      <SectionHeader title={title} content={content} />
      <div className="row item-container">
        {benefitSectionData?.map((item, idx) => (
          <BenefitItem key={idx} {...item} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default BenefitSection
