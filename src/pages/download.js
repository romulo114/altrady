import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import DownloadHeroSection from "../sections/download-hero"
import TradingSoftwareSection from "../sections/trading-software"
import FeatureCTASection from "../sections/feature-cta"
import { reviewsData, softwareListData } from "../utils/staticData"
import ReviewsSection from "../sections/reviews/Reviews"
import Seo from "../components/seo"

const Download = () => {
  return (
    <LandingPageLayout>
      <Seo
        title="Download Now Altrady for Windows, Mac, Linux, Android, iOS & Browser"
        description="Manage cryptocurrency with ease on Windows, Mac, Linux, Android, iOS & Browser. Easy-to-use crypto trading platform. Private & secure. Download Altrady App Now"
      />
      <DownloadHeroSection />
      <TradingSoftwareSection {...softwareListData} />
      <FeatureCTASection />
      <ReviewsSection {...reviewsData} />
    </LandingPageLayout>
  )
}

export default Download
