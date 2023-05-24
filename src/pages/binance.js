import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import SectionHeader from "../components/common/SectionHeader"
import SectionLayout from "../layouts/SectionLayout"
import FeatureItem from "../components/common/FeatureItem"
import BinanceHeroSection from "../sections/binance-hero"
import LinkPrimaryBtn from "../components/common/LinkPrimaryBtn"
import FAQSection from "../sections/faq"
import {
  BinanceLogo,
  AltradyLogo,
  BeginnerHero,
  PriceBreakingOut,
  ExchangesHero,
  SmartHero,
  PortfolioHero,
  MultichartHero,
} from "../utils/imgLoader"
import Seo from "../components/seo"
import { Image } from "../components/image"

const featuresSection = {
  title: "Benefits of Binance Trading Using the Altrady App",
  content: ``,
}
const featuresListData = [
  {
    data: {
      header: "Real-Time Cryptocurrency Alerts",
      content: `Get accurate and real-time alerts up-to-the-second! With Altrady’s cryptocurrency alerts, you can automatically receive price alerts and catch profitable trades on your favorite Binance markets!`,
      icon: PriceBreakingOut,
    },
  },
  {
    data: {
      header: "Convenient Trading on Multiple Exchanges",
      content: `No doubt about Binance’s reputation in the crypto sphere, but with Altrady, you can trade not just on Binance but also on other exchanges without any hassle at all. Spread out your risks and enjoy the many benefits of trading on Binance and other exchange platforms!`,
      icon: ExchangesHero,
    },
  },
  {
    data: {
      header: "Strategy-Boosting Trading Tools",
      content: `Altrady is full of trading tools that can boost your trading strategy and give you advantageous results on Binance trading. Use Altrady’s Crypto Base Scanner and Quick Scanner to find profitable entry points in the market. Place advanced trading orders such as scaled ladders to maximize your wins and minimize your trading losses in the face of volatile crypto markets.`,
      icon: SmartHero,
    },
  },
  {
    data: {
      header: "Automatic Portfolio Tracker",
      content: `Keep track of your Binance exchange wallet, and see how well your assets have been performing throughout your trading history. Altrady’s automatic portfolio manager gives you an updated and comprehensive summary of all your digital coins across multiple exchange wallets.`,
      icon: PortfolioHero,
    },
  },
  {
    data: {
      header: "Easy User Experience",
      content: `Trading on Binance and other exchanges is a lot easier with Altrady! Everything you need to monitor markets, place orders, and track your performances are all on your Altrady dashboard. Trade from one exchange to another by simply toggling in between market menus and take advantage of Altrady’s charts to view multiple markets all at the same time on a single screen!`,
      icon: MultichartHero,
    },
  },
]
const headerContent = `Binance & Altrady:
Your Trading Partners Toward Success`
const sectionContent = `Binance and Altrady can help you reach your fullest potential - Binance opens you to an entire crypto ecosystem that includes thousands of crypto markets and millions of traders worldwide while Altrady empowers you with innovative technology for easier and profitable trading.`

const title = `Frequently Asked Questions
on Binance Trading through Altrady`
const questions = [
  {
    title: `Can I trade on Binance with Altrady?`,
    content: `Yes, definitely! Altrady gives you powerful tools to boost your trading potentials on Binance, Binance US, and Binance Futures.`,
  },
  {
    title: `What crypto pairs or markets can I trade on Binance using Altrady?`,
    content: `All the crypto pairs listed on Binance can be trading using Altrady.`,
  },
  {
    title: `How do I use Altrady on Binance?`,
    content: `Binance integration with Altrady is easy.

1. Make sure that you have a verified Binance account.
2. Register to Altrady. If you want to try it out first, you can get Altrady’s 30-day free trial.
3. Connect your Binance account to Altrady using the API key which you can generate on your Binance account.`,
  },
  {
    title: `Which plan is best for me?`,
    content: `Altrady has three subscription plans: Signals Only, Basic, Essential, and Premium. To get the maximum use of Altrady for trading on Binance, it is best to get the Premium plan to enjoy base scanner, quick scanner, automatic portfolio, mobile app, and all-in-one trading terminal among others.`,
  },
  {
    title: `Can I use bots to trade on Binance using Altrady?`,
    content: `Yes, you can automate your trading with the help of your preferred bot. Use Altrady’s bot integration feature to trade smart and conveniently.`,
  },
  {
    title: `Can I use Altrady for trading on Binance anywhere?`,
    content: `Yes, you can use Altrady across the globe. If you are in the US, then you can connect your Binance US account to Altrady.`,
  },
]

const Binance = () => {
  return (
    <LandingPageLayout>
      <Seo
        title="Binance Exchange"
        description="Altrady, try now the Advanced Crypto Trading Platform for Crypto Traders! Trade BTC and Altcoins Easy And Make Profits. Bitcoin Automated Trading."
      />
      <BinanceHeroSection />
      <section className="section member">
        <h1 className="section-title">{headerContent}</h1>
        <p className="section-content">{sectionContent}</p>
        <div className="binance-img">
          <Image src={BeginnerHero} alt={headerContent} />
        </div>
      </section>
      <section className="section member">
        <h1 className="section-title">Altrady Makes Binance Trading Easy</h1>
        <p className="section-content">
          Altrady has a very simple goal: To make crypto trading easy and
          accessible to everyone. All the research, developments, and efforts
          done by the Altrady management revolve around this mission to simplify
          everyone’s crypto trading experience for a more profitable venture.
        </p>
        <div className="d-flex justify-content-center mt-95 trading-easy">
          <Image
            className="binance-logo mr-5"
            src={BinanceLogo}
            alt="binance"
          />
          <Image className="altrady-logo" src={AltradyLogo} alt="altrady" />
        </div>
      </section>
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
      <section className="section bg-gray">
        <div className="row">
          <div className="col-sm-6 text-center">
            <Image
              className="binance-logo mr-5"
              src={BinanceLogo}
              alt="binance"
            />
            <p className="logo-content">Register on Binance</p>
            <LinkPrimaryBtn clsName="btn-primary mb-5">Sign Up</LinkPrimaryBtn>
          </div>
          <div className="col-sm-6 text-center">
            <Image
              className="altrady-logo mr-5"
              src={AltradyLogo}
              alt="altrady"
            />
            <p className="logo-content">Connect your Binance to Altrady</p>
            <LinkPrimaryBtn clsName="btn-primary">Connect</LinkPrimaryBtn>
          </div>
        </div>
      </section>
      <FAQSection title={title} questions={questions} />
    </LandingPageLayout>
  )
}

export default Binance
