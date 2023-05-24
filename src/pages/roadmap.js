import React from "react"
import { graphql } from "gatsby"
import HeroComponent from "../components/hero"
import LandingPageLayout from "../layouts/LandingPageLayout"
import TradeNowCTA from "../sections/trade-now-cta"
import LevelUpCTASection from "../sections/level-up-cta"
import SectionLayout from "../layouts/SectionLayout"
import SectionHeader from "../components/common/SectionHeader"
import { HomeHero } from "../utils/imgLoader"
import Seo from "../components/seo"

const headerContent = `Altrady roadmap`
const sectionContent = `We’re here for the long term. Our product roadmap helps us share what we’re working on next and the direction that we’re taking our business in.`
const levelUp = {
  title: "Level Up Now",
  description: `Overwhelmed with the complexity of the cryptocurrency world?
  Bring your trading experience to another level with the power of cryptocurrency trading software Altrady, your best bitcoin trading platform choice`,
}
const comingUp = {
  title: "What’s coming up",
  content: `The below view is an insight into what we’re currently working on, what's coming up and what is in research.`,
}

const RoadmapList = ({ value }) => {
  return (
    <div className="comeup-item">
      <h4>{value.data.title}</h4>
      <p className="quarter-year my-2">{value.data.quarter_year}</p>
      <p className="comeup-item-text">{value.data.content}</p>
    </div>
  )
}

const Roadmap = ({ data }) => {
  const comingupData = data.allPrismicRoadmap.nodes
  const activeList = comingupData.filter(
    item => item.data.status === "Development"
  )
  const plannedList = comingupData.filter(
    item => item.data.status === "Researching"
  )
  const backlogList = comingupData.filter(
    item => item.data.status === "Backlog"
  )
  const releasedList = comingupData.filter(
    item => item.data.status === "Released"
  )
  return (
    <LandingPageLayout>
      <Seo
        title="Roadmap - Altrady's Crypto Trading Product for Bitcoin"
        description="Roadmap - Altrady's Crypto Trading Product for Bitcoin Start Trading With Altrady's Crypto Trading Product! Check our Bitcoin and Altcoins product features."
      />
      <HeroComponent
        clsName="section hero roadmap"
        headerContent={headerContent}
        sectionContent={sectionContent}
        kickerText="What’s next"
        heroImg={HomeHero}
      />
      <TradeNowCTA
        title="Take Advantage Of The Fastest Crypto Trading Tool"
        description="Suitable For Day Trading or Automated Trading"
        btn="Trade now with Altrady"
      />
      <SectionLayout sectionName="upcoming">
        <SectionHeader title={comingUp.title} content={comingUp.content} />
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <h3>Active development</h3>
            {activeList.map((item, idx) => (
              <RoadmapList key={idx} value={item} />
            ))}
          </div>
          <div className="col-lg-4 col-md-12">
            <h3>Planned next</h3>
            {plannedList.map((item, idx) => (
              <RoadmapList key={idx} value={item} />
            ))}
          </div>
          <div className="col-lg-4 col-md-12">
            <h3>Backlog</h3>
            {backlogList.map((item, idx) => (
              <RoadmapList key={idx} value={item} />
            ))}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout sectionName="recently-released">
        <h3 className="text-center">Recently Released</h3>
        <div className="mt-5">
          {releasedList.map((item, idx) => (
            <RoadmapList key={idx} value={item} />
          ))}
        </div>
      </SectionLayout>
      <LevelUpCTASection
        title={levelUp.title}
        description={levelUp.description}
        button="Try for free"
        to="https://app.altrady.com/dashboard#/signup"
      />
    </LandingPageLayout>
  )
}

export default Roadmap

export const query = graphql`
  query Roadmap {
    allPrismicRoadmap {
      nodes {
        data {
          status
          quarter_year
          title
          content
        }
      }
    }
  }
`
