import React from "react"
import { Link } from "gatsby"
import "../style.scss"
import { LeftAngle } from "../../utils/imgLoader"
import { convertCurrency } from "../../utils"
import { Image } from "../../components/image"

const ExchangeDetailHeroSection = ({ exchangeData }) => {
  const stats = exchangeData?.stats
  return (
    <section className={"section hero exchange-detail"}>
      <div className="exchange-layout text-center">
        <Link to="/exchanges" className="back__link justify-content-center">
          <Image
            alt="left angle"
            src={LeftAngle}
            className="back-img"
            width={16}
            height={10}
          />
          All exchanges
        </Link>
        <div className="item-name d-flex justify-content-center align-items-center">
          <Image
            alt={exchangeData?.name}
            src={exchangeData?.icon}
            className="item__img "
          />
          <h1 className="item_title">{exchangeData?.name}</h1>
        </div>
        <p className="item__content txt-white">
          {exchangeData?.short_description}
        </p>
        <div className="tags d-flex justify-content-center">
          {exchangeData?.type_group.map((item, idx) => (
            <p
              className={
                item.support === true
                  ? "caption item__tag active"
                  : "caption item__tag"
              }
              key={idx}
            >
              {item.select_type}
            </p>
          ))}
        </div>
        <div className="item-detail d-flex justify-content-center">
          <div className="item-detail__col">
            <p className="caption">Markets:</p>
            <h4 className="item-detail__markets">{stats?.numMarkets}</h4>
          </div>
          <div className="item-detail__col">
            <p className="caption">Coins:</p>
            <h4 className="item-detail__markets">{stats?.numCoins}</h4>
          </div>
          <div className="item-detail__col">
            <p className="caption">24h Volume:</p>
            <h4 className="item-detail__markets">
              {convertCurrency(stats?.usdVolume)}
            </h4>
          </div>
        </div>
        <a
          href={exchangeData?.exchange_url}
          className="btn btn-primary btn-goto"
        >
          Go to {exchangeData?.name}
        </a>
        <p className="caption color-dark-tertiary text-center">
          * - not supported in Altrady
        </p>
      </div>
    </section>
  )
}

export default ExchangeDetailHeroSection
