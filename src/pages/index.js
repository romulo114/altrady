import React from "react"
import { graphql } from "gatsby"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroSection from "../sections/hero"
import ExchangeSection from "../sections/exchanges"
import BenefitSection from "../sections/benefit"
import FeaturesListSection from "../sections/features-list"
import ReviewsSection from "../sections/reviews/Reviews"
import CoinCryptorSection from "../sections/coin-cryptor"
import PeopleSayingSection from "../sections/people-saying"
import PeopleSayingSection2 from "../sections/people-saying2"
import FeatureCTASection from "../sections/feature-cta"
import PeopleSayingSection3 from "../sections/people-saying3"
import BestCryptorSection from "../sections/best-cryptor"
import LevelUpCTASection from "../sections/level-up-cta"
import TradingSoftwareSection from "../sections/trading-software"
import Seo from "../components/seo"
import {
  heroSectionData,
  benefitSection,
  benefitSectionData,
  featuresSection,
  featuresListData,
  reviewsData,
  testimonials1,
  testimonials2,
  benoistTestimonial,
  bestCryptorSection,
  softwareListData,
} from "../utils/staticData"
import Popup from "../components/common/Popup"

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading software choice`

export default function Home({ data }) {
  const blogCategories = data.allPrismicBlogCategory.nodes
  const bestCryptorSectionData = data.allPrismicBlogPostApi.nodes.filter(
    item => item.data.homepage
  )
  const exchangeData = data?.allPrismicExchanges.nodes.filter(
    item => item.data.upcoming === false
  )
  // const activeDoc = {
  //   lang,
  //   type,
  //   url,
  //   alternateLanguages,
  // }
  return (
    <LandingPageLayout>
      <Seo title="Altrady Crypto Trading Software is Fast, Easy & Secure | Trade Bitcoin" />
      <HeroSection heroSectionData={heroSectionData} />
      <ExchangeSection exchangeData={exchangeData} />
      <BenefitSection
        title={benefitSection.title}
        content={benefitSection.content}
        benefitSectionData={benefitSectionData}
      />
      <FeaturesListSection
        title={featuresSection.title}
        content={featuresSection.content}
        featuresListData={featuresListData}
      />
      <ReviewsSection {...reviewsData} />
      <CoinCryptorSection />
      <PeopleSayingSection {...testimonials1} />
      <PeopleSayingSection2 {...testimonials2} />
      <FeatureCTASection />
      <PeopleSayingSection3 {...benoistTestimonial} />
      <BestCryptorSection
        title={bestCryptorSection.title}
        content={bestCryptorSection.content}
        categories={blogCategories}
        data={bestCryptorSectionData}
      />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Why Altrady?"
        to="why-altrady"
      />
      <TradingSoftwareSection {...softwareListData} />
      <Popup />
    </LandingPageLayout>
  )
}

export const query = graphql`
  query Home {
    allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
      nodes {
        data {
          name
          slug
          icon {
            url
            gatsbyImageData
          }
          partner
          upcoming
        }
      }
    }
    allPrismicBlogPostApi {
      nodes {
        alternate_languages {
          uid
          type
          lang
        }
        lang
        type
        data {
          title
          slug
          featured
          date
          homepage
          category {
            id
          }
          content {
            raw
          }
          summary
          thumbnail {
            url
          }
        }
      }
    }
    allPrismicBlogCategory {
      nodes {
        data {
          color
          name
          slug
          meta_description
          meta_keywords
          meta_title
        }
        prismicId
      }
    }
  }
`
