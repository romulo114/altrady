import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import Seo from "../components/seo"
import MemberHero from "../sections/member-hero"
import MemberQuestion from "../sections/member-question"
import SectionHeader from "../components/common/SectionHeader"
import FeatureItem from "../components/common/FeatureItem"
import SectionLayout from "../layouts/SectionLayout"
import BenefitSection from "../sections/benefit"
import LevelUpCTASection from "../sections/level-up-cta"
import { BeginnerHero, BasicHero, Track } from "../utils/imgLoader"

const kickerText = "Why Altrady?"
const headerContent = "Best Crypto Trading Software for Beginners"
const sectionContent = `If you are a beginner crypto trader and just starting to explore the ins and outs of crypto trading, you have found the best platform to start! Best crypto trading platform for beginners is built by traders to make things simple and easy for you, now beginners traders can trade Bitcoins or Altcoins easily. When you are at the beginning of your trading journey, it's extremely important to have an easy cryptocurrency platform to be successful in trading. Taking this into consideration, we built the best cryptocurrency trading software for beginners.`
const questionHeader = "Crypto Trading Software for Beginners"
const questionContent =
  "Most Common Cryptocurrency Trading Questions For Beginners"
const questionFooter = `We all know that crypto trading is not easy. However, you are not alone anymore.
  Altrady is here to help you answer all these questions and make this process more fun for you. Best Crypto Trading Software For Beginners`
const questions = [
  "What is crypto trading?",
  "What crypto coins should I buy?",
  "What crypto trading strategy should I use?",
  "What is the crypto market depth chart?",
  "How do I earn money from crypto trading?",
  "How do I trade crypto?",
  "How do I understand the charts?",
  "What are cryptocurrencies?",
  "What crypto trends should I know?",
  "Which crypto exchange should I use?",
  "How do I learn crypto trading?",
  "How do I make a crypto exchange account?",
  "How do I know when to buy or sell coins?",
  "How do I understand candlesticks?",
]
const featuresSection = {
  title: "Why subscribe to Altrady?",
  content: `With Altrady, you are at a huge advantage!
  Our tools and technology give you the easiest way to manage your trades and portfolio.`,
}
const featuresListData = [
  {
    data: {
      header: "Members-only Trading Community",
      content: `This is a community of like-minded people who are learning and growing with you. Here at Altrady, the learning process is open and inclusive. We have a welcoming community of traders who are willing to help you traverse the right path by giving you expert advice. If you feel confused in the process, just let us know and we will readily help you. With members in different countries, you're sure to find someone who "gets you.`,
      icon: BasicHero,
    },
  },
  {
    data: {
      header: "Altrady Helps You Reach Success",
      content: `We developed Altrady's easy-to-use tools and accessible crypto trading platform for beginners to help you succeed in this crypto trading venture!
  
  Be successful now with Altrady's crypto trading software for beginners.`,
      icon: Track,
    },
  },
]
const benefitSection = {
  title: "Innovative Crypto Tools For Beginners.",
  content: `The beginning stages of crypto trading can make you question the correctness of your decisions. This stems from the possibility of not completely understanding the behavior of markets and of not having your own fully developed strategy. Altrady crypto trading software for beginners, makes crypto market analysis less complicated. 
By using our tools, you can have the right information to guide your decision-making process and help you craft the best strategy according to your own goals.`,
}
const benefitSectionData = [
  {
    title: "All-in-one trading platform",
    content:
      "With Altrady, you are at a huge advantage!\nOur tools and technology give you the easiest way to manage your trades and portfolio.",
    image: {
      url:
        "https://altrady.cdn.prismic.io/altrady/9013621d-3a1f-41ca-8c54-3f6dbbff022a_trading-platform.svg",
    },
  },
  {
    title: "Fast & powerful technology",
    content:
      "Make the right trading actions with speed and reliability! Altrady's innovative technology lets you react to changing markets with accuracy and efficiency.",
    image: {
      url:
        "https://altrady.cdn.prismic.io/altrady/7df34a92-4157-4105-aea4-afd4bb197cd9_fast-powerful-technology.svg",
    },
  },
  {
    title: "100% fund security",
    content:
      "Altrady uses state-of-the-art encryption to safely store you API keys on the servers.",
    image: {
      url:
        "https://altrady.cdn.prismic.io/altrady/2cd921c7-4b45-4e00-8fce-b637e2930b8f_found-security.svg",
    },
  },
]
const title = "Best Crypto Tools For Beginners"
const description = `The beginning stages of crypto trading can make you question the correctness of your decisions. This stems from the possibility of not completely understanding the behavior of markets and of not having your own fully developed strategy.`
const explainData = [
  {
    title:
      "A crypto trader who has a strong foundation in knowledge and understanding",
    content: `Build your foundation for success by learning the most essential concepts and processes through the Altrady Academy. Explore the different strategies and methods you could use with the help of the Altrady community!`,
  },
  {
    title:
      "A crypto trader who knows how to utilize and take advantage of innovation",
    content: `Subscribe to the Altrady platform and simplify the process of trading. Get everything you need to manage your trades across multiple exchanges in one simple and convenient trading platform!`,
  },
  {
    title:
      "A crypto trader who can minimize the risks and maximize the potentials",
    content: `Know A crypto trader who is equipped and empowered to achieve bigger things right time when to buy or sell coins. Use Altrady's crypto signals, price alerts, break-even calculator, and other trading tools to build your assets!`,
  },
  {
    title:
      "A crypto trader who is equipped and empowered to achieve bigger things",
    content: `Move from beginner trader to a more experienced one as you learn to maximize the use of our signals, trading terminal, base scanner, portfolio manager, and more!`,
  },
]
export default function Beginner() {
  const explainList = explainData.map((item, idx) => (
    <div key={idx} className="explain-item">
      <div className="circle-num">{idx + 1}</div>
      <div className="explain">
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  ))
  return (
    <LandingPageLayout>
      <Seo
        title="Best Crypto Trading Software For Beginners in 2021"
        description="If you are a beginner crypto trader, you have found the best platform to start! Best crypto trading software for beginners is built by traders to make things simple and easy for you."
      />
      <MemberHero
        kickerText={kickerText}
        headerContent={headerContent}
        sectionContent={sectionContent}
        img={BeginnerHero}
      />
      <MemberQuestion
        questionHeader={questionHeader}
        questionContent={questionContent}
        questionFooter={questionFooter}
        questions={questions}
      />
      <SectionLayout>
        <SectionHeader
          title={featuresSection.title}
          content={featuresSection.content}
        />
        <div className="cryptor-content-wrapper">
          {featuresListData?.map((item, idx) => (
            <FeatureItem
              key={idx}
              showCTABtn={false}
              even={idx % 2 === 0 ? "" : " flex-row-reverse"}
              value={item}
            />
          ))}
        </div>
      </SectionLayout>
      <BenefitSection
        title={benefitSection.title}
        content={benefitSection.content}
        benefitSectionData={benefitSectionData}
      />
      <LevelUpCTASection
        title={title}
        description={description}
        button="Hit the Coins Now"
        to="https://app.altrady.com/dashboard#/signup"
      />
      <section className="section member">
        <h2 className="section-title">
          As a beginner crypto trader, <br />
          Altrady will help you become successful
        </h2>
        <p className="title-comment mb-3">
          Trading Terminal for Different Exchanges
        </p>
        <p className="section-content mb-5">
          Spread your risks and multiply your opportunities by trading on
          different crypto exchanges. With Altrady, you can trade on the
          following exchanges without any hassle at all:
        </p>
        {explainList}
      </section>
    </LandingPageLayout>
  )
}
