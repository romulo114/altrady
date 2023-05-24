import React from "react"
import LandingPageLayout from "../layouts/LandingPageLayout"
import AnnualPlanSection from "../sections/annual-plan"
import FAQSection from "../sections/faq"
import FeatureCTASection from "../sections/feature-cta"
import PricingHero from "../sections/pricing-hero"
import Seo from "../components/seo"

const title = `Frequently Asked Questions`
const content = `To support the global trading community, we are offering special discounts for Annual plan.`
const questions = [
  {
    title: `Which payment methods can I use?`,
    content: `We support a few methods listed below:

    - Bitcoin + Altcoins
    - Credit Card or Debit Card
    - PayPal
    - SEPA
    - Bank transfer
    - iDeal`,
  },
  {
    title: `Is margin trading available in Altrady?`,
    content: `No, margin trading is not supported at the moment. But you can trade on Binance Futures with leverage.`,
  },
  {
    title: `Do I need to add a credit card or other payment method to use the trial?`,
    content: `When you create a trial account, you get a free 14 days access`,
  },
  {
    title: `What limitations does the trial accounts have?`,
    content: `The trial accounts have the following limitations:

    - Connect only 1 exchange account
    - Only receive base alerts for 1 exchange
    - Maximum of 25 custom alerts
    - Session only last 24 hours, after that you have to sign in again.
    - Trade history is only visible for the last 14 days
    - Longer time frames on the quick scan are disabled`,
  },
  {
    title: `Will my trial be shortened if I buy a subscription before the trials ends?`,
    content: `We always add the extra time to your trial period. So we actually recommend to buy the subscription as soon as possible.
    ‍
You will get to use all the features during your trial time as well.`,
  },
  {
    title: `Do I have to pay per trade made via the Altrady?`,
    content: `No, trades are performed on the exchange and normal fees apply.`,
  },
  {
    title: `Can I get a refund?`,
    content: `We cannot refund partial use of the subscription time. We do offer a 30 day money back guarantee for the first purchase.
Just send an email to support@altrady.com`,
  },
  {
    title: `Can I switch plans?`,
    content: `Yes, you can always upgrade or downgrade to a different plan.
If you have time left in your current subscription, we will credit the remaining subscription time and use that on the next payment.`,
  },
  {
    title: `What happens if my subscription is expired?`,
    content: `When your subscription has expired, we will notify you via email and you will not be able to access the trading platform.
You can sign in to renew your subscription to get access to the trading platform. We will not delete your details unless you ask us to.
You can also setup a recurring subscription, so you will never forget to extend your subscription.`,
  },
]

export default function Pricing() {
  return (
    <LandingPageLayout>
      <Seo
        title="Free Crypto Trading Subscription | Start 14 Day Free Trial | Pricing"
        description="Altrady pricing offers three subscription levels, Basic, Essential & Premium. You can also choose crypto trading subscription for 14 days free of charge."
      />
      <PricingHero />
      <AnnualPlanSection />
      <FeatureCTASection />
      <FAQSection title={title} content={content} questions={questions} />
    </LandingPageLayout>
  )
}
