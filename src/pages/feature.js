import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import HeroComponent from "../components/hero"
import SubFeatures from "../sections/sub-features"
import FeatureOthers from "../sections/feature-others"
import LevelUpCTASection from "../sections/level-up-cta"
import Seo from "../components/seo"

const title = `Level Up Now`
const description = `Overwhelmed with the complexity of the cryptocurrency world?
Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`

export default function Feature({ pageContext }) {
  const { feature } = pageContext
  const featureData = feature?.data
  return (
    <LandingPageLayout>
      <Seo
        title={featureData?.meta_title}
        description={featureData?.meta_description}
        keywords={featureData?.meta_keywords}
      />
      <HeroComponent
        clsName="section hero feature"
        headerContent={featureData?.header}
        sectionContent={featureData?.content}
        kickerText={featureData?.kicker}
        heroImg={featureData?.icon}
        type="feature"
      />
      <SubFeatures featuresData={featureData?.feature_group} />
      <FeatureOthers
        title={featureData?.section_title}
        featureOthers={featureData?.other_features}
      />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Try for free"
        bk=" blue-bk"
        to="https://app.altrady.com/dashboard#/signup"
      />
    </LandingPageLayout>
  )
}
