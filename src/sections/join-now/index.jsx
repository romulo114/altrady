import React from "react"

const title = `Join now`
const content = `Manage Your Digital Assets Within One Interface`
const JoinNowSection = ({ type }) => {
  return (
    <div className="section-cta join-now bk-color-blue">
      <h2 className="title">{title}</h2>
      <p className="lead-text">{content}</p>
      {type && (
        <a
          className="btn-academy-join"
          href="https://app.altrady.com/dashboard#/signup"
        >
          Trade now with Altrady
        </a>
      )}
    </div>
  )
}

export default JoinNowSection
