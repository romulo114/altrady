import React from "react"
import SectionHeader from "../../components/common/SectionHeader"
import ExchangesListItem from "../../components/exchanges-list-item"
import SectionLayout from "../../layouts/SectionLayout"
import { useStaticQuery, graphql } from "gatsby"

const sectionContent = `Altrady allows you to trade on multiple exchanges from the single interface. Pick what exchanges fit your needs.`

const SupportedExchangeSection = () => {
  const data = useStaticQuery(graphql`
    query Exchanges {
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            name
            type_group {
              support
              select_type
            }
            short_description
            slug
            upcoming
            icon {
              url
            }
            stats {
              numMarkets
              numCoins
              usdVolume
            }
          }
        }
      }
    }
  `)
  const exchangesData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  return (
    <SectionLayout sectionName="supported-exchange">
      <SectionHeader title="Supported exchanges" content={sectionContent} />

      <div className="row exchanges-list">
        {exchangesData.map((item, idx) => (
          <ExchangesListItem {...item.data} key={idx} />
        ))}
      </div>
    </SectionLayout>
  )
}

export default SupportedExchangeSection
