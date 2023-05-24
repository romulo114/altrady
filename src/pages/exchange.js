import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeDetailHeroSection from "../sections/exchange-detail-hero"
import BenefitSection from "../sections/benefit"
import ExchangeFeatureList from "../sections/exchange-features"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import { softwareListData } from "../utils/staticData"
import Seo from "../components/seo"

const benefitContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

const Exchange = ({ pageContext }) => {
  const { exchange } = pageContext
  const benefitSectionData = exchange?.data.benefit_group
  const exchangeName = exchange?.data.name
  const currentExchange = exchange?.data
  const featuresListData = currentExchange?.exchange_feature
  return (
    <LandingPageLayout>
      <Seo
        title={exchange?.data.meta_title}
        description={exchange?.data.meta_description}
        keywords={exchange?.data.meta_keywords}
      />
      <ExchangeDetailHeroSection exchangeData={currentExchange} />
      <BenefitSection
        title={exchangeName + " Exchange Benefits"}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <ExchangeFeatureList
        title={currentExchange?.section_title}
        content={currentExchange?.section_subtitle}
        featuresListData={featuresListData}
      />
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

export default Exchange
