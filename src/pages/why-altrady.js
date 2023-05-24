import React from "react"
import HeroComponent from "../components/hero"
import LandingPageLayout from "../layouts/LandingPageLayout"
import AltradySubscribeListSection from "../sections/altrady-subscribe-list"
import PeopleSayingSection3 from "../sections/people-saying3"
import ReviewsSection from "../sections/reviews/Reviews"
import TradeNowCTA from "../sections/trade-now-cta"
import TradingToolSection from "../sections/trading-tool"
import TradingFeaturesSection from "../sections/trading-features"
import ExclusiveVideoSection from "../sections/exclusive-video"
import BenefitSection from "../sections/benefit"
import { HomeHero } from "../utils/imgLoader"
import { benoistTestimonial, reviewsData } from "../utils/staticData"
import FeatureCTASection from "../sections/feature-cta"
import JoinNowSection from "../sections/join-now"
import AnnualPlanSection from "../sections/annual-plan"
import Seo from "../components/seo"

const headerContent = `Easy & Simple Trading Platform For Higher Profits `
const sectionContent = `Get the power to trade and manage coins from many exchanges in one app.

Altrady has simplified day trading and automated trading for you. The app gives you advanced trading tools so you can save time trading while getting better profits.`
const altradySubscribeTitle = `Why subscribe to Altrady?`
const altradySubscribeContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`

const benefitTitle = "Multiple Benefits. Single Platform."
const benefitContent = `With Altrady, you are at a huge advantage!
Our tools and technology give you the easiest way to manage your trades and portfolio.`
const benefitSectionData = [
  {
    title: "Crypto Academy",
    content: `Altrady’s Crypto Trading Academy is available for everyone to learn from. If you have questions about cryptocurrency trading strategies, tools, and platforms, then Crypto Academy should be your go-to place.`,
    image: {
      url:
        "https://altrady.cdn.prismic.io/altrady/9013621d-3a1f-41ca-8c54-3f6dbbff022a_trading-platform.svg",
    },
  },
  {
    title: "Best Customer Support",
    content: `Our CX team continues to deliver the best and fastest customer support. Since Altrady is founded on the goal of making trading easier and accessible, Benoist and the entire team have committed to helping you with whatever concerns you have about the app or any trading-related query.`,
    image: {
      url:
        "https://altrady.cdn.prismic.io/altrady/7df34a92-4157-4105-aea4-afd4bb197cd9_fast-powerful-technology.svg",
    },
  },
  {
    title:
      "We Offer No Obligation, 14-Day Free Trial Subscription, ONLY PURE BENEFITS",
    content: `Who gives away free trials without risks and obligations? Here at Altrady, we are confident enough to give free trial subscriptions without getting your credit card details. Yes, you can leave anytime during the free trial - no hidden cost and no risk at all. Just try the app, and see how Altrady can make a difference in your trading life.`,
    image: {
      url:
        "https://altrady.cdn.prismic.io/altrady/2cd921c7-4b45-4e00-8fce-b637e2930b8f_found-security.svg",
    },
  },
]
const WhyAltrady = () => {
  return (
    <LandingPageLayout>
      <Seo
        title="Why Altrady Is The Best Crypto Trading Plaform in 2021"
        description="Altrady The Advanced Crypto Trading Platform for Crypto Traders! Trade BTC and Altcoins Easy And Make Profits. Bitcoin Automated Trading."
      />
      <HeroComponent
        clsName="section hero why-altrady"
        headerContent={headerContent}
        sectionContent={sectionContent}
        kickerText="Why Altrady?"
        heroImg={HomeHero}
      />
      <TradeNowCTA
        title="Take Advantage Of The Fastest Crypto Trading Tool"
        description="Suitable For Day Trading or Automated Trading"
        btn="Trade now with Altrady"
      />
      <PeopleSayingSection3
        showHeader={false}
        extraClsName="why-altrady"
        {...benoistTestimonial}
      />
      <AltradySubscribeListSection
        title={altradySubscribeTitle}
        content={altradySubscribeContent}
      />
      <ReviewsSection {...reviewsData} />
      <TradingToolSection />
      <TradingFeaturesSection />
      <ExclusiveVideoSection />
      <BenefitSection
        title={benefitTitle}
        content={benefitContent}
        benefitSectionData={benefitSectionData}
      />
      <FeatureCTASection />
      <JoinNowSection />
      <AnnualPlanSection />
    </LandingPageLayout>
  )
}

export default WhyAltrady
