import React from "react"
import { graphql } from "gatsby"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import AllFeatures from "../sections/all-features"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import { softwareListData, featuresHeroData } from "../utils/staticData"
import Seo from "../components/seo"

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

export default function Features({ data }) {
  const featuresData = data.allPrismicFeatures.nodes
  return (
    <LandingPageLayout>
      <Seo
        title="Advanced Crypto Trading Features For Bitcoin | Altcoins"
        description="Altrady Advanced Crypto Trading Features. Best Crypto Features That Make Bitcoin &amp; Altcoin Trading Easier. Real-time Alerts"
      />
      <HeroSection extraClsName="light-bk" heroSectionData={featuresHeroData} />
      <AllFeatures featuresData={featuresData} />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Try for free"
        to="https://app.altrady.com/dashboard#/signup"
      />
      <TradingSoftwareSection {...softwareListData} />
    </LandingPageLayout>
  )
}

export const query = graphql`
  query FeatureQuery {
    allPrismicFeatures(sort: { order: ASC, fields: data___priority }) {
      nodes {
        data {
          slug
          content
          header
          kicker
          icon {
            url
            alt
          }
        }
      }
    }
  }
`
