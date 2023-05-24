import React from "react"
import { BinanceLogo } from "../../utils/imgLoader"
import { Image } from "../../components/image"

const title =
  "Easy Trading on Binance Using the Altrady Crypto Trading Platform"
const content = `Binance and Altrady can help you reach your fullest potential - Binance opens you to an entire crypto ecosystem that includes thousands of crypto markets and millions of traders worldwide while Altrady empowers you with innovative technology for easier and profitable trading.`

const BlogDetailHero = () => {
  return (
    <div className="section hero binance">
      <div className="layout-container member">
        <Image alt="binance" src={BinanceLogo} className="item__img" />
        <h1 className="blog-detail-hero__title">{title}</h1>
        <p className="color-dark-tertiary text-center">{content}</p>
      </div>
    </div>
  )
}

export default BlogDetailHero
