import React, { useState } from "react"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"
import AnnualHeaderItem from "./AnnualHeaderItem"
import AnnualRow from "./AnnualRow"

const title = `Get 30% Discount with our Annual Plan`
const content = `To support the global trading community, we are offering special discounts for Annual plan.`
const annualHeaderData = [
  {
    type: "Basic",
    percentage: "-30%",
    currentPrice: "€10.46",
    reducedPrice: "~$12.55",
    oldPrice: "€14.95",
  },
  {
    type: "Essential",
    percentage: "-30%",
    currentPrice: "€20.96",
    reducedPrice: "~$25.15",
    oldPrice: "€29.95",
  },
  {
    type: "Premium",
    percentage: "-30%",
    currentPrice: "€31.46",
    reducedPrice: "~$37.75",
    oldPrice: "€44.95",
  },
]
const annualOptions = [
  {
    title: `Signals`,
    description: `Crypto Base Scanner signals on ApexTrader, Le-Trader, Nefertiti, Zignaly`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Trading Terminal`,
    description: `Trade on several exchanges from our powerful trading terminal.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Portfolio`,
    description: `Manage your assets with historic and current portfolio data`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Trading Analytics`,
    description: `Analyze your trading performance and get PNL for all your exchanges and markets`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Multi Charts`,
    description: `Open multiple charts on the same screen`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Custom Alerts`,
    description: `You can setup your custom alerts.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Position Tracker`,
    description: `Analyze your trading performance and get PNL for all your exchanges and markets`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Break Even Calculator`,
    description: `Instantly see your profit margin and know your break-even point for a particular market.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Basic Order Types`,
    description: `Market, Limit and Stop Limit orders.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Base Scanner`,
    description: `Fully integrated Crypto Base Scanner with all current bases and push notifications`,
    ch1: false,
    ch2: false,
    ch3: true,
  },
  {
    title: `Quick Scanner`,
    description: `Market Scanner to find fast up or down price action, including the Fat Finger Scanner.`,
    ch1: false,
    ch2: false,
    ch3: true,
  },
]
const annualTradingData = [
  {
    title: `Limit Ladder Order`,
    description: `Ladders make it possible to create multiple orders at the same time.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `One-Cancel-the-Other Order`,
    description: `An OCO order often combines a stop order with a limit order.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
]
const annualOrdersData = [
  {
    title: `Take profit`,
    description: `It is a standing order that is placed by specifying a certain price point above the purchase price so that you could sell coins during a quick rise in price and thereby make a profit from it.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Trailing stop`,
    description: `Trailing stop order can maximize your returns and minimize your losses. It is designed to protect your crypto gains by enabling a trade to remain open and continue generating profits during favorable market conditions.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
]

const monthlyHeaderData = [
  {
    type: "Basic",
    percentage: "",
    currentPrice: "€14.95",
    reducedPrice: "$17.64 (1 EUR ~= 1.18 USD)",
    oldPrice: "",
  },
  {
    type: "Essential",
    percentage: "",
    currentPrice: "€29.95",
    reducedPrice: "$35.34 (1 EUR ~= 1.18 USD)",
    oldPrice: "",
  },
  {
    type: "Premium",
    percentage: "",
    currentPrice: "€44.95",
    reducedPrice: "$53.04 (1 EUR ~= 1.18 USD)",
    oldPrice: "€79.95",
  },
]
const monthlyOptions = [
  {
    title: `Signals`,
    description: `Crypto Base Scanner signals on ApexTrader, Le-Trader, Nefertiti, Zignaly`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Trading Terminal`,
    description: `Trade on several exchanges from our powerful trading terminal.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Portfolio`,
    description: `Manage your assets with historic and current portfolio data`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Trading Analytics`,
    description: `Analyze your trading performance and get PNL for all your exchanges and markets`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Multi Charts`,
    description: `Open multiple charts on the same screen`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Custom Alerts`,
    description: `You can setup your custom alerts.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Position Tracker`,
    description: `Analyze your trading performance and get PNL for all your exchanges and markets`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Break Even Calculator`,
    description: `Instantly see your profit margin and know your break-even point for a particular market.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Basic Order Types`,
    description: `Market, Limit and Stop Limit orders.`,
    ch1: true,
    ch2: true,
    ch3: true,
  },
  {
    title: `Limit Ladder Order`,
    description: `Ladders make it possible to create multiple orders at the same time.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `One-Cancel-the-Other Order`,
    description: `An OCO order often combines a stop order with a limit order.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Take profit`,
    description: `It is a standing order that is placed by specifying a certain price point above the purchase price so that you could sell coins during a quick rise in price and thereby make a profit from it.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Trailing stop`,
    description: `Trailing stop order can maximize your returns and minimize your losses. It is designed to protect your crypto gains by enabling a trade to remain open and continue generating profits during favorable market conditions.`,
    ch1: false,
    ch2: true,
    ch3: true,
  },
  {
    title: `Base Scanner`,
    description: `Fully integrated Crypto Base Scanner with all current bases and push notifications`,
    ch1: false,
    ch2: false,
    ch3: true,
  },
  {
    title: `Quick Scanner`,
    description: `Market Scanner to find fast up or down price action, including the Fat Finger Scanner.`,
    ch1: false,
    ch2: false,
    ch3: true,
  },
]

const AnnualPlanSection = ({ type }) => {
  const [isAnnual, setIsAnnual] = useState(true)
  return (
    <SectionLayout sectionName={"annual " + type}>
      <SectionHeader title={title} content={content} />
      <div className="annual-header">
        <div className="plan-tab d-flex">
          <div
            className={isAnnual ? "plan-tab__item active" : "plan-tab__item"}
            onClick={() => setIsAnnual(!isAnnual)}
            onKeyDown={() => setIsAnnual(!isAnnual)}
            role="button"
            tabIndex="0"
          >
            Annual (-30%)
          </div>
          <div
            className={isAnnual ? "plan-tab__item" : "plan-tab__item active"}
            onClick={() => setIsAnnual(!isAnnual)}
            onKeyDown={() => setIsAnnual(!isAnnual)}
            role="button"
            tabIndex="0"
          >
            Monthly
          </div>
        </div>
        <div className="row">
          <div className="sticky col-lg-12">
            <div className="row">
              <div className="col-lg-3 tablet-hide"></div>
              {isAnnual
                ? annualHeaderData.map((item, idx) => (
                    <AnnualHeaderItem {...item} key={idx} />
                  ))
                : monthlyHeaderData.map((item, idx) => (
                    <AnnualHeaderItem {...item} key={idx} />
                  ))}
            </div>
          </div>

          {isAnnual
            ? annualOptions.map((item, idx) => (
                <AnnualRow {...item} key={idx} />
              ))
            : monthlyOptions.map((item, idx) => (
                <AnnualRow {...item} key={idx} />
              ))}

          <div className="col-lg-12 plan-type">Advanced trading:</div>
          {isAnnual &&
            annualTradingData.map((item, idx) => (
              <AnnualRow {...item} key={idx} />
            ))}

          <div className="col-lg-12 plan-type">Smart orders:</div>
          {isAnnual &&
            annualOrdersData.map((item, idx) => (
              <AnnualRow {...item} key={idx} />
            ))}
        </div>

        <div className="row phone-hide">
          <div className="col-lg-3 tablet-hide"></div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className="btn btn-primary "
            >
              14-days free trial
            </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className="btn btn-primary "
            >
              14-days free trial
            </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className="btn btn-primary "
            >
              14-days free trial
            </a>
          </div>
        </div>

        <div className="row phone-show">
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className="btn btn-primary "
            >
              Try Now
            </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className="btn btn-primary "
            >
              Try Now
            </a>
          </div>
          <div className="col-lg-3 col-sm-4 col-4 btn-container">
            <a
              href="https://app.altrady.com/dashboard#/signup"
              className="btn btn-primary "
            >
              Try Now
            </a>
          </div>
        </div>
      </div>
      <div className="annual-content">
        <div className="signals">
          <p className="signals-head">
            Signals Only
            {isAnnual && <span className="color-red"> Save 30%</span>}
          </p>
          <p className="signals-body color-tertiary">
            Access to Crypto Base Scanner signals on: <br />
            Axion, Anny Bot, Le-Trader, Nefertiti, Zignaly, Trailing Crypto
          </p>
        </div>
        <div className="signals-buy">
          <p className="signals-head">{isAnnual ? "€9.07" : "€12.95"}</p>
          <p className="signals-price color-tertiary">~$15.33</p>
          {isAnnual && (
            <p className="signals-price label-strike color-tertiary">€12.95</p>
          )}
          <p className="signals-price color-tertiary">
            {isAnnual ? "Billed annually" : "Billed monthly"}
          </p>
          <a
            href="https://app.altrady.com/dashboard#/signup"
            className="btn btn-primary mt-2"
          >
            Buy Now
          </a>
        </div>
      </div>
    </SectionLayout>
  )
}

export default AnnualPlanSection
