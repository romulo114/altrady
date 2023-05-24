import React from "react"
import ExchangeItem from "../../components/header/ExchangeItem"
import SectionLayout from "../../layouts/SectionLayout"

const ExchangeSection = ({ extraCls = "", exchangeData }) => {
  return (
    <SectionLayout sectionName={"exchanges " + extraCls}>
      <div className="exchanges-item__container">
        <div className="first-line d-flex row">
          {exchangeData?.map((item, idx) => (
            <ExchangeItem
              key={idx}
              title={item.data.name}
              slug={item.data.slug}
              image={item.data.icon}
              extraCls=" width-sm-20"
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}

export default ExchangeSection
