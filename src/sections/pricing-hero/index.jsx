import React from "react"
import HeroComponent from "../../components/hero"
import { HomeHero } from "../../utils/imgLoader"

const sectionContent = `Boost your trading with the all-in-one cryptocurrency trading software. Trade on multiple exchanges, track your performance, improve and get less emotional.
Bitcoin trading platform for beginners and expert traders.`
const headerContent = `Plans`

const PricingHero = () => {
  return (
    <HeroComponent
      clsName="section hero pricing"
      headerContent={headerContent}
      sectionContent={sectionContent}
      kickerText="PLANS AND PRICES"
      heroImg={HomeHero}
    />
  )
}

export default PricingHero
