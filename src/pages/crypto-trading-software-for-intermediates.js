import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import Seo from "../components/seo"
import MemberHero from "../sections/member-hero"
import MemberQuestion from "../sections/member-question"
import SectionHeader from "../components/common/SectionHeader"
import FeatureItem from "../components/common/FeatureItem"
import SectionLayout from "../layouts/SectionLayout"
import LevelUpCTASection from "../sections/level-up-cta"
import {
  BeginnerHero,
  ExchangesHero,
  PortfolioHero,
  BasicHero,
  Drops,
  Track,
  CBSHero,
} from "../utils/imgLoader"

const kickerText = "Why Altrady?"
const headerContent = "Best Crypto Trading Platform for Intermediates"
const sectionContent = `Grow your crypto assets and build your trading expertise with the help of Altrady!`
const questionHeader = "Crypto Trading Software For Intermediate Traders"
const questionContent = "Any of these sound familiar?"
const questionFooter = ``
const questions = [
  "What is the best crypto trading strategy?",
  "What cryptocurrency tools can I use to efficiently track my portfolio?",
  "How do I keep track of my assets from different cryptocurrency multi exchanges?",
  "What crypto trading platform gives real-time alerts?",
  "What crypto strategies can I combine to create an effective trading plan?",
  "What is the best way to diversify cryptocurrency portfolio?",
  "How do I effectively manage my crypto trading portfolio?",
  "How to automate crypto trading?",
  "What crypto trading platform offers comprehensive solutions to daily trading?",
  "How to become a better trader?",
]
const featuresSection = {
  title: "Why our Traders Love Altrady?",
  content: ``,
}
const featuresListData = [
  {
    data: {
      header: "Altrady is convenient for trading in multiple exchanges",
      content: `By subscribing to Altrady, you can manage all your trades from multiple cryptocurrency exchanges by using a single trading desk or platform. This is a hassle-free solution to those who buy and sell coins in different locations. There is no more need to shift from one exchange to another because all you need to perform your trades are in the Altrady app!`,
      icon: ExchangesHero,
    },
  },
  {
    data: {
      header: "Altrady simplifies portfolio management",
      content: `Experience easy and efficient asset monitoring with Altrady's comprehensive portfolio manager! We remove the complexity of checking the growth or decline of your coins from different platforms by giving you a simple tool that can automatically and accurately track your portfolios. Say goodbye to miscalculations from manual computations!`,
      icon: PortfolioHero,
    },
  },
  {
    data: {
      header: "Altrady offers 100% fund security",
      content: `Altrady features 100% secure API integration through state-of-the-art encryption technology. With Altrady, you can be certain that only you have access to your trading orders and your funds. Also, prevent theft and loss of funds by utilizing Altrady's automatic portfolio tracking to monitor your exchange wallets in one place.`,
      icon: BasicHero,
    },
  },
  {
    data: {
      header: "Altrady has crypto scanning tools for strategic actions",
      content: `Be able to fully implement your strategy with Altrady's powerful base scanning tool. Take advantage of the information you get from our base scanning tool to make profitable trades.`,
      icon: Drops,
    },
  },
  {
    data: {
      header: "Altrady helps you grow as a trader",
      content: `There is so much potential in crypto trading in terms of your growth in knowledge, decision-making, strategy formulation, and even professionalism.`,
      icon: Track,
    },
  },
  {
    data: {
      header: "Altrady sends crypto signals and real-time alerts",
      content: `Make strategic trading decisions that are based on accurate information. With Altrady, you can receive fast and powerful crypto signals for an effective analysis of crypto markets. We also send real-time crypto alerts to help you spot profitable entry points in your targeted coin market.`,
      icon: CBSHero,
    },
  },
]
const title = "Accelerate Your Crypto Trading to Next Level"
const description = ``
const explainData = [
  {
    title:
      "To grow as a intermediate crypto trader with a solid crypto knowledge",
    content: `The Altrady Academy is full of tips, tricks, and lessons to help you deepen your crypto knowledge. Even our community can open you to different insights from members of different trading levels.`,
  },
  {
    title:
      "To grow as a intermediate crypto trader with a strong trading experience",
    content: `The altrady platform is the perfect place to explore crypto market trends and behaviours. With an integrated platform for multiple exchanges, you can examine the behaviour of various coin markets in different exchanges by using our simple market search function. You can also use Altrady's interactive charting interface to spot trends and draw patterns to help you understand markets better.`,
  },
  {
    title:
      "To grow as a intermediate crypto trader who makes data-driven trading actions",
    content: `With Altrady, you will realize that fast and accurate information is essential to making the right trading actions. Capitalize on your data-driven trading decisions to build your crypto wealth!`,
  },
  {
    title:
      "To grow as a intermediate crypto trader who makes objective decisions",
    content: `Altrady helps you prevent making emotional trading decisions that can ruin your strategy. With our innovative tools, you can make objective trading actions despite sudden market movements.`,
  },
]
export default function Intermediate() {
  const explainList = explainData.map((item, idx) => (
    <div key={idx} className="col-lg-3 col-md-12 mb-4">
      <div className="circle-num mb-4">{idx + 1}</div>
      <h4 className="mb-3">{item.title}</h4>
      <p>{item.content}</p>
    </div>
  ))
  return (
    <LandingPageLayout>
      <Seo
        title="Best Crypto Trading Software For Intermediate Traders From Altrady is Fast, Easy & Secure"
        description="As an intermediate crypto trader you have different needs and frustrations. Altrady helps you overcome them."
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
      <LevelUpCTASection
        title={title}
        description={description}
        button="Hit the Coins Now"
        to="https://app.altrady.com/dashboard#/signup"
      />
      <SectionLayout>
        <h2 className="section-title text-center mb-5">
          As an intermediate crypto trader,
          <br />
          Altrady will help you in the following ways:
        </h2>
        <div className="row">{explainList}</div>
      </SectionLayout>
    </LandingPageLayout>
  )
}
