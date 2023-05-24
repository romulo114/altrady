import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import ExchangeHeroSection from "../sections/exchange-hero"
import SupportedExchangeSection from "../sections/supported-exchange"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import UpcomingSupportSection from "../sections/upcoming-support"
import { softwareListData } from "../utils/staticData"
import Seo from "../components/seo"

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`
export default function Exchanges() {
  return (
    <LandingPageLayout>
      <Seo
        title="Top Bitcoin & Altcoins Cryptocurrency Exchanges Partners"
        description="Top Bitcoin and Altcoin Cryptocurrency Exchanges. Trading on Multiple Exchanges Easy and Secure. Crypto Trading Platform For Multiple Bitcoin Exchanges"
      />
      <ExchangeHeroSection />
      <SupportedExchangeSection />
      <UpcomingSupportSection />
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
