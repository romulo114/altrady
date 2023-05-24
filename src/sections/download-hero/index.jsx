import React from "react"
import HeroComponent from "../../components/hero"
import { HomeHero } from "../../utils/imgLoader"
const sectionContent = `Windows, Mac OS, Linux or just in browser.
Altrady works where you work.`
const headerContent = `Download the Altrady App`

const DownloadHeroSection = () => {
  return (
    <HeroComponent
      clsName="section hero download"
      headerContent={headerContent}
      sectionContent={sectionContent}
      kickerText="Simple. Fast. Secure."
      heroImg={HomeHero}
    />
  )
}

export default DownloadHeroSection
