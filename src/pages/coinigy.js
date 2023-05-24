import React from "react"
import CoinigyHero from "../sections/coinigy-hero"
import TradeNowCTA from "../sections/trade-now-cta"
import ComparisonContent from "../components/comparison-content"
import ReviewsSection from "../sections/reviews/Reviews"
import PeopleSayingSection from "../sections/people-saying4"
import AnnualPlanSection from "../sections/annual-plan"
import Seo from "../components/seo"
import {
  BoughtSold,
  BreakEven,
  CBSHero,
  HomeHero,
  LayoutsHero,
  MultichartHero,
  NotesHero,
  PastTrades,
  PortfolioHero,
  PriceBreakingOut,
  TakeProfit,
  Track,
} from "../utils/imgLoader"
import { reviewsData, testimonials3 } from "../utils/staticData"
import CompareComponent from "../components/compare"
import { Image } from "../components/image"

const headerContent = `Here's Why Altrady Is The 
Best Coinigy Alternative`
const sectionContent = `Find out the game changing benefits of Altrady cryptocurrency trading platform.`

const Coinigy = () => {
  return (
    <>
      <Seo
        title="Altrady vs Coinigy - Check Now Why Altrady Is The  Best Coinigy Alternative"
        description="See why Altrady is the best coingiy alternative. Find out the game changing benefits of Altrady crypto trading platform."
      />
      <main className="pt-0">
        <CoinigyHero
          clsName={"section hero coinigy"}
          headerContent={headerContent}
          sectionContent={sectionContent}
          kickerText="Altrady vs coinigy"
          heroImg={HomeHero}
        />
        <section className="section comparison bg-gray">
          <ComparisonContent
            kickerText="Alerts"
            title={`Altrady vs Coinigy Altrady's Real-Time Crypto Alerts Help You Achieve Your Profit Goals`}
            content="Receive your alerts in seconds and not minutes"
            img={PriceBreakingOut}
            alt="Real Time Crypto Alerts"
          />
          <CompareComponent
            desc={`Altrady’s Real-Time Crypto Alerts Help You Achieve Your Profit Goals`}
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`With Altrady, real-time is as real as it gets. You get accurate updates up-to-the-second - no lags and no extended waiting time, unlike other multi-exchange trading platforms.`}
            coinigyContent={`Coinigy alerts often come in minutes after the price is triggered. This can cause you to lose an opportunity to enter or exit a particular market.`}
          />
          <CompareComponent
            desc={`Altrady Real-Time Order Notifications Offers You Opportunities for Success`}
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Altrady also processes real-time order notifications. Knowing when your order is filled is crucial to not miss your profit target. Orders placed through Altrady are monitored with their websockets connection. This allows Altrady users to receive order notifications in real-time.`}
            coinigyContent={`In contrast, order notifications from Coinigy often come in minutes after the order is filled. Again, this can cause you to miss a profitable trading opportunity.`}
          />
          <div className="d-flex justify-content-center people">
            <div className="people-saying-item h-auto">
              <Image
                alt="Testimonial"
                src="https://altrady.cdn.prismic.io/altrady/195e8618-7e5e-4887-8ae6-56dde853c45f_testimonial-person1.svg"
                className="people-saying-item__img "
              />
              <p className="people-saying-item__content">{`Automatic alerts when trade has been executed (also on phone, not just when the program on computer is open), updating trades (size & price) is very easy`}</p>
            </div>
          </div>
        </section>
        <section className="section comparison">
          <ComparisonContent
            kickerText="TRADING ANALYTICS"
            title={`Trading Analytics: 
Coinigy Versus Altrady`}
            content="Altrady’s Trading Analytics Help You Analyze Indicators and Evaluate Your Trading Performance
            for Better Decision-Making"
            img={Track}
            alt="Trading analytics: coinigy vs altrady"
          />
          <CompareComponent
            desc={`Trading Analytics is vital to your success. It helps you make profitable trading decisions amidst the abundance of market information and the complexity of patterns in the crypto trading world.`}
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Altrady’s Trading Analytics provide you with comprehensive details about your trading performance over a certain period and throughout your trading lifetime. It presents relevant trading information such as your current balance, total amount invested, net profit, win rate, realized/unrealized profit, total assets recovered, average loss, and much more. Altrady’s Trading Analytics also features a growth chart that lets you visualize your trading performance and asset growth throughout your trading journey. Hovering over a point on the chart shows you more specific information such as your remaining investment and your profit for that particular period.`}
            coinigyContent={`The current version of Coinigy includes both an Orders page and a Portfolio page that lets you track your buy and sell orders as well as your coin balances across exchanges and accounts. However, it does not feature a Trading Analytics page that can give you a detailed account of your trading history and performance summary.`}
          />
        </section>
        <section className="section comparison bg-gray">
          <ComparisonContent
            kickerText="Charts"
            title={`Charts`}
            content="Altrady’s Interactive and Customizable Crypto Trading Charts Empower You to Strategically Spot Trends and Patterns with Convenience and Ease"
            img={MultichartHero}
            alt="crypto charts"
          />
          <CompareComponent
            desc={`Charts are essential elements of any crypto trading platform. Through charts, we get to see what’s happening in crypto markets, and we get to discover patterns that help us find profitable trading opportunities. Altrady’s management has designed your crypto charts to become customizable and interactive so that you can see the most relevant information with ease and be able to use such information to your advantage.`}
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Altrady’s Charts page is extremely helpful for both beginners and professionals who want to conveniently monitor their favorite markets and to easily find noteworthy market trends. You can choose to see 4 charts at once on your screen, focus on a single market, or play with several charts depending on your liking. All charts are high-definition for clear viewing of coin market movements. They also include technical indicators, drawing tools, and a screenshot feature for better interaction with your charts.`}
            coinigyContent={`Coinigy’s Board allows you to view multiple crypto charts on your monitor. Create a board with custom panels that could include market charts, orderbook, market depth, news feed, and more.`}
            coinigyYes
          />
        </section>
        <section className="section comparison">
          <ComparisonContent
            kickerText="Scanners"
            title={`Altrady vs Coinigy
Crypto Market Scanner`}
            content="Crypto Base Scanner & Quick Scanner are Unique to Altrady"
            img={CBSHero}
            alt="crypto market scanner"
          />
          <CompareComponent
            desc={`Both Altrady and Coinigy have crypto market scanners that can automatically monitor thousands of cryptocurrency markets 24/7. However, what is unique to Altrady is its specialized crypto scanners called the Crypto Base Scanner and Quick Scanner.`}
            altrady="Altrady - Crypto Base Scanner"
            coinigy="Coinigy - Crypto Base Scanner"
            altradyContent={`By using Altrady's Crypto Base Scanner, you can take advantage of price volatility to gradually build your digital assets. It is perfect for QFL traders or those who use the base strategy.`}
            coinigyContent={`Doesn't have anything similar`}
          />
          <CompareComponent
            altrady="Altrady - Crypto Quick Scanner"
            coinigy="Coinigy - Crypto Quick Scanner"
            altradyContent={`By using Altrady's Crypto Base Scanner, you can take advantage of price volatility to gradually build your digital assets. It is perfect for QFL traders or those who use the base strategy.`}
            coinigyContent={`Doesn't have anything similar.`}
          />
          <CompareComponent
            altrady="Altrady - Arbitrage overview"
            coinigy="Coinigy - Arbitrage overview"
            altradyContent={`By using Altrady's Crypto Base Scanner, you can take advantage of price volatility to gradually build your digital assets. It is perfect for QFL traders or those who use the base strategy.`}
            coinigyContent={`Coinigy only offers an arbitrage overview.`}
            waiting
          />
        </section>
        <TradeNowCTA
          title="Make your trading life easier with Crypto Market Scanners"
          btn="Try Altrady’s Unique Scanners"
        />
        <section className="section comparison bg-gray">
          <ComparisonContent
            kickerText="Portfolio"
            title={`Altrady vs Coinigy
Portfolio Management`}
            content="Altrady has Advanced Portfolio Management Features for Insightful Trading"
            img={PortfolioHero}
            alt="Altrady vs Coinigy Crypto Portfolio Management"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Altrady's Portfolio automatically monitors the dynamic movement of users' crypto funds while trading. Through the accurate and up-to-date information reflected on the Altrady portfolio, traders can now have better decision-making that is guided by the insightful analysis of their fund growth, decrease, and percent change.`}
            coinigyContent={`Coinigy can show your assets across exchanges but it fails to present you with important information on how your assets have grown in a particular period. This could cause you to miss the opportunity of selling "free" coins for a great price.`}
          />
        </section>
        <section className="section comparison">
          <ComparisonContent
            kickerText="Layout"
            title={`Altrady vs Coinigy
Trading Page Layout`}
            content="Altrady Gives You a Personalized Experience through a Customizable Dashboard"
            img={LayoutsHero}
            alt="trading page layout"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`A lot of traders have their own opinion on what information is more critical for their trading style. At Altrady we allow you to fully customize the layout and place the information on the screen where you want it.`}
            coinigyContent={`Coinigy uses a fixed layout and that might not fit your needs.`}
          />
        </section>
        <TradeNowCTA
          title="Create Your Desired Dashboard"
          btn="Create Your Dashboard Now"
        />
        <section className="section comparison bg-gray">
          <ComparisonContent
            kickerText="Tools"
            title={`Altrady Automatic Position Tracker To
Monitor Current Trades`}
            content="Altrady Trading Software Tools Developed By Traders For Traders!
Benoist is the brain behind the code, not just the CEO"
            img={BoughtSold}
            alt="automatic position tracker"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`An automatic position tracker is a necessary crypto trading software tool that enables you to keep track of current trades that you have running. Subscribing to the Altrady crypto trading platform gives you this advantage`}
            coinigyContent={`Coinigy offers trade history and order history. You will have to use an external tool like a spreadsheet to make calculations for your positions.`}
          />
        </section>
        <section className="section comparison">
          <ComparisonContent
            kickerText="Tools"
            title={`Altrady Automatic Break-Even 
Calculator To Minimize Risks And 
Maximize Profits`}
            img={BreakEven}
            alt="break-even calculator"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Altrady's break-even calculator works exactly to fulfill such purpose of minimizing your trading losses. It is among the most loved tools of crypto traders because it allows them to have an immediate break-even calculation without having to use an external application like a spreadsheet.`}
            coinigyContent={`Unfortunately again for Coinigy, you can only access your trade and order history. To know whether or not you have met the break-even point, you will need to open an external application such as the spreadsheet to make your calculations.`}
          />
        </section>
        <TradeNowCTA
          title="Check Out Our Trading Software Tools"
          btn="Try Now Our Trading Software Tools"
        />
        <section className="section comparison">
          <ComparisonContent
            kickerText="TRADING FUNCTIONS"
            title={`There are different order types for different trading strategies, methods, and goals.`}
            img={TakeProfit}
            alt="crypto orders"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Altrady supports five different order types. Expanding their order types to include limit ladder and OCO allows their users maximize their potentials and reduce their risks through the layering technique. It gives traders the option to easily place multiple orders at the same time using several mathematical formulas to spread the orders apart.`}
            coinigyContent={`With Coinigy, you can only place market orders, limit orders, and stop limit orders. Although they have an advanced order type through the stop limit, they use their own system to place the orders. While this is great for exchanges that do not support stop loss limit, limit orders may be placed too late and result in losing the trade.`}
          />
        </section>
        <section className="section comparison bg-gray">
          <ComparisonContent
            kickerText="TRADING FUNCTIONS"
            title={`Altrady Allows Trade Import from Exchanges`}
            img={PastTrades}
            alt="import trade history"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`Having all your trade history in one place is crucial to keep track of all your assets and positions. Through the trade history, you will be well-informed of your current trading status and help you avoid making the same trading mistakes of the past. This is the very reason why Altrady has allowed the importation of your trades from the exchanges.`}
            coinigyContent={`Coinigy, however, doesn't have this feature. It only shows what they can reasonably retrieve from the exchanges.`}
          />
        </section>
        <section className="section comparison">
          <ComparisonContent
            kickerText="TRADING FUNCTIONS"
            title={`Altrady's Notes Widgets Serves as Your Integrated Trading Journal`}
            img={NotesHero}
            alt="crypto trading journal"
          />
          <CompareComponent
            altrady="Altrady"
            coinigy="Coinigy"
            altradyContent={`To effectively record your market observations and trading thoughts, Altrady has added the Notes Widget as one of the newest tools in the latest version of the crypto trading software, this addition is perfect to keep track of your best cryptocurrency investments.`}
            coinigyContent={`Coinigy allows you to store the notes in the charts but you can't see your notes from different markets in the same place.`}
          />
        </section>
        <ReviewsSection {...reviewsData} />
        <PeopleSayingSection {...testimonials3} />
        <AnnualPlanSection type="coinigy" />
      </main>
    </>
  )
}

export default Coinigy
