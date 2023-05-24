import React from "react"
import SupportItem from "../../components/common/SupportItem"
import SectionLayout from "../../layouts/SectionLayout"
import {
  BoughtSold,
  CBSHero,
  HomeHero,
  LayoutsHero,
  MobileAlerts,
  PortfolioHero,
  Presets,
  PriceBreakingOut,
  QuickScanDrops,
  SmartHero,
  TradingAnalyticsHero,
} from "../../utils/imgLoader"

const tradingFeaturesData = [
  {
    title: `Real-Time Crypto Alerts 24/7`,
    content: `Whether you do manual or automated trading, getting real-time crypto information is vital to your success. Altrady’s real-time crypto alerts make sure that you and your bot receive the most important price updates for the right decision-making and trading actions.`,
    img: PriceBreakingOut,
  },
  {
    title: `Automatic Portfolio Manager`,
    content: `Altrady’s portfolio manager helps you minimize risks and manage your assets. This tool gives you a comprehensive overview of your assets with detailed information regarding distribution per currency and exchange. Portfolio is synced to your exchange wallets so you can see accurate summaries at any time of the day.`,
    img: PortfolioHero,
  },
  {
    title: `Crypto Base Scanner`,
    content: `Finding profitable entry points in the market becomes much easier with Altrady’s base scanning tool. Let Altrady’s unique algorithms do the job of spotting price drops below the base 24/7. Wait for the alerts to pop out of your mobile screens or desktops so you can immediately buy at low price levels or sell just at the right time.`,
    img: CBSHero,
  },
  {
    title: `Quick Scanner`,
    content: `Take advantage of whale activities and profit from the game of huge market players by using Quick Scanner. This tool instantly notifies you when a huge and fast price drop or increase happened in a particular market. Without Quick Scanner, monitoring big price movements and immediately reacting to them can be impossible.`,
    img: QuickScanDrops,
  },
  {
    title: `Safe & Secure Trading Application`,
    content: `Altrady is 100% safe for all types of cryptocurrency traders. We use state-of-the-art encryption technology to make sure that only you have access to your trading orders and your digital assets.`,
    img: HomeHero,
  },
  {
    title: `Automatic Break-Even Calculator`,
    content: `Instantly see your profit margin and know your break-even point for a particular market with the break-even calculator. No more need for manual calculations or spreadsheet entries! Since it is automatically synced and calculated, you can be sure about the figures that you see — all accurate, always updated, and no more confusion.`,
    img: BoughtSold,
  },
  {
    title: `Mobile Application, Desktop App & Web Access`,
    content: `Never again be restricted by your location and time. You can access Altrady’s features whenever, wherever, and whatever device you are using. Currently, trading is enabled on both desktop and web versions. Soon, mobile trading will be able to make your trading life easier.`,
    img: MobileAlerts,
  },
  {
    title: `Personalized & Easy Trading Interface`,
    content: `See relevant trading information easily on a simple trading interface. All the information and tools you need for successful trading are here. Choose which information is most important to you and drag them at the top of the page. You can also have different layouts for different moods or trading strategies.`,
    img: LayoutsHero,
  },
  {
    title: `Smart Automated Trading Features`,
    content: `In 2020, Altrady has finally released two automated trading order types - trailing stop order and take profit order. With these new trading features, you can place advanced orders to continually participate in markets even when you are asleep or away from the screens.`,
    img: SmartHero,
  },
  {
    title: `Trading Analytics`,
    content: `Use Altrady’s Trade Analytics to evaluate your trading history. Get accurate insights into your trading performance and the growth of your assets. Utilize analytics data to boost your trading strategy and improve your decision-making.`,
    img: TradingAnalyticsHero,
  },
  {
    title: `Helpful Trading Community`,
    content: `Our community is open to all kinds of traders. Here, we learn from each other, grow together, and make things much easier for everyone. Join the Altrady trading community to interact with other traders — ask questions, receive crypto updates, get market insights, and offer your own tips!`,
    img: Presets,
  },
]
const TradingFeaturesSection = () => {
  return (
    <SectionLayout sectionName="trading-feature">
      <div className="cryptor-content-wrapper">
        {tradingFeaturesData.map((item, idx) => (
          <SupportItem
            showCTABtn={false}
            key={idx}
            even={idx % 2 === 0 ? "" : " flex-row-reverse"}
            {...item}
          />
        ))}
      </div>
    </SectionLayout>
  )
}

export default TradingFeaturesSection
