import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"
import { Image } from "../../components/image"

const title = `Trading Tool & Features For Better Trading`
const subTitle = `Trading Terminal for Different Exchanges`
const content1 = `Spread your risks and multiply your opportunities by trading on different crypto exchanges. With Altrady, you can 
trade on the following exchanges without any hassle at all:`
const content2 = `Setup your integrations by connecting Altrady to your exchange platform through API.`

const TradingToolSection = () => {
  const data = useStaticQuery(graphql`
    query TradingToolSection {
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            slug
            upcoming
            icon {
              url
            }
          }
        }
      }
    }
  `)
  const exchangeData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  return (
    <SectionLayout sectionName="trading-software">
      <SectionHeader title={title} />

      <div className="trading-software__content">
        <h4 className="content__sub-title">{subTitle}</h4>
        <p className="lead-text content1">{content1}</p>
        <p className="lead-text content2">{content2}</p>
      </div>

      <SectionLayout sectionName="exchanges bk-color-white trading">
        <div className="exchanges-item__container">
          <div className="first-line d-flex row">
            {exchangeData?.map((item, idx) => (
              <div className="feature-item" key={idx}>
                <Image
                  alt={item.data.name}
                  src={item.data.icon}
                  className="feature-item__image "
                />
                <div className="feature-item__content-wrapper">
                  <h5 className="feature-item_title">{item.data.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </SectionLayout>
  )
}

export default TradingToolSection
