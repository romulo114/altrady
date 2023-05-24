import React from "react"

const title = `Bitcoin or Altcoins Crypto Trading Software. 14 Days for 
Free!`
const description = `Put your trading performance to the next level.`
const CoinCryptorSection = () => {
  return (
    <div className="section-cta">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{description}</p>
      <a
        href="https://app.altrady.com/dashboard#/signup"
        className="btn btn-primary "
      >
        Try for free
      </a>
    </div>
  )
}

export default CoinCryptorSection
