import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import Seo from "../components/seo"
import MemberHero from "../sections/member-hero"
import MemberQuestion from "../sections/member-question"
import SectionHeader from "../components/common/SectionHeader"
import SectionLayout from "../layouts/SectionLayout"
import FeatureItem from "../components/common/FeatureItem"
import LevelUpCTASection from "../sections/level-up-cta"
import {
  BeginnerHero,
  Drops,
  MobileAlerts,
  PlanCheck,
  PriceBreakingOut,
  QuickScanHero,
  RealtimeHero,
} from "../utils/imgLoader"
import { Image } from "../components/image"

const kickerText = "Why Altrady?"
const headerContent =
  "Professional Crypto Trading Software For Advanced Traders:"
const sectionContent = `Some people think that professional traders no longer need help. After all, you have been breathing crypto trading for years now, and have successfully made a living out of your profits. But aren't these misconceptions about professional and expert traders?

Here at Altrady, we value the experiences and consider the problems of all traders - from providing the essential foundations for beginner traders to offering expert solutions for professional ones.`
const questionHeader = "Crypto Trading Software For Professionals"
const questionContent = "Any of these sound familiar?"
const questionFooter = ``
const questions = [
  "How do I share my professional crypto trading knowledge?",
  "How do I contribute to the cryptocurrency community?",
  "How could I trade with less emotions?",
  "How do I maintain healthy social interactions and relationships while engaged in crypto trading?",
  "How could I reduce stress from crypto trading?",
  "How do I not lose money from cryptocurrency?",
  "How do I disconnect my time from crypto trading without risking my assets?",
  "What if crypto crashes, how do I maintain my work and source of income?",
]
const featuresSection = {
  title: "Why Professional Crypto Traders Love Altrady?",
  content: ``,
}
const featuresListData = [
  {
    data: {
      header: "Altrady gives you a chance to enjoy life while trading",
      content: `Most professions require your presence from 9am to 5pm. But with crypto trading, the activity is 24/7! This has led to an extremely toxic and stressful life for most professional traders.
  
      With Altrady, you are given a chance to enjoy life without worrying about your trades. Despite the fast-changing markets, know that you have the option to get out of your trading screen to either enjoy the company of your family and friends or relax on your own. Altrady's automatic market analysis and trading bot integration can help you remain active in the markets without sacrificing your well-being.`,
      icon: PriceBreakingOut,
    },
  },
  {
    data: {
      header: "Altrady lets you make emotionless & objective trading decisions",
      content: `We have nothing against emotions! Feeling excitement and fear because of market behavior and trading outcomes are natural emotions to embrace. However, when reacting to markets and making buy and sell orders, it is important to neutralize our emotions in favor of more objective decisions. With the right tools and information, you can become less emotional and more strategic in your trades!
  
      Use our automatic portfolio tracker and break-even calculator to base your decisions on the overall movement of your assets. Get an insightful analysis of your portfolios by looking at the distribution per currency and exchange. No need to panic about the accuracy and timeliness of calculations because all your coins across exchange wallets are properly reflected.`,
      icon: Drops,
    },
  },
  {
    data: {
      header: "Altrady is accessible anytime & anywhere",
      content: `Trade whenever and wherever with Altrady! Access your account from the desktop, web browser, and mobile app to make trades and monitor markets anytime and anywhere.`,
      icon: MobileAlerts,
    },
  },
  {
    data: {
      header:
        "Altrady's powerful technology lets you explore other opportunities",
      content: `Altrady is a time-saving platform that makes crypto trading easy and convenient for everyone. We do not only give you insights into profitable market opportunities but also give you a chance to explore other opportunities offered by life. Use Altrady's time-saving features to learn other skills that you may use in case of unforeseeable and uncontrollable events. Apart from expanding your skill set, you may also use your extra time to see unexplored opportunities in the crypto sphere and even in other industries. Automate your trading, save more time, and unlock other potentials!`,
      icon: QuickScanHero,
    },
  },
  {
    data: {
      header: "Altrady gives you a voice in the community",
      content: `Altrady's active community of traders welcomes you to be part of a healthy exchange of ideas. Share your expert knowledge, take on our members' dilemma or drop your questions as well. Give us your feedback on how we can improve the Altrady platform and contribute to our goal of making crypto trading easier and accessible for everyone. We did not just build the most favorite crypto trading software for professionals. We also want to create and grow an awesome crypto community.`,
      icon: RealtimeHero,
    },
  },
]
const title = "Accelerate Your Crypto Trading to Next Level"
const description = ``
const explainData = [
  "A professional trader who leads a balanced life",
  "A professional trader who has a sustainable asset growth plan and strategy",
  "A professional trader who contributes to the growth of the community",
  "A professional trader who makes objective trading decisions that are based on up-to-date and correct information",
  "A professional trader who efficiently manages his or her time",
]
export default function Pro() {
  const explainList = explainData.map((item, idx) => (
    <div key={idx} className="d-flex mb-2 align-items-baseline">
      <Image
        alt={"Option Check"}
        src={PlanCheck}
        className="option-check w-fit-content mr-3"
      />
      <p>{item}</p>
    </div>
  ))
  return (
    <LandingPageLayout>
      <Seo
        title="Professional Crypto Trading Software From Altrady is Fast, Easy & Secure"
        description="Trade Bitcoin, Altcoins and Etherum with professional crypto trading software from Altrady. Best for advanced and professional traders."
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
      <section className="section member">
        <h2 className="section-title mb-5">
          Let Altrady bring your success even further!
          <br />
          Let us help you become:
        </h2>
        <div className="explain-list">{explainList}</div>
      </section>
    </LandingPageLayout>
  )
}
