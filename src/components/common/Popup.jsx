import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { CloseIcon } from "../../utils/imgLoader"
import { Image } from "../image"

const ActionBtn = () => (
  <span className="btn-learn-more btn-text-learn text-link">Learn more</span>
)

const Popup = () => {
  const [showPopup, setPopup] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setPopup(true), 5000)
    return () => clearTimeout(id)
  }, [])
  return (
    showPopup && (
      <div className="popup-container">
        <p
          className="popup-close"
          onClick={() => setPopup(false)}
          onKeyDown={() => setPopup(false)}
          role="presentation"
        >
          <Image src={CloseIcon} alt="close" />
          Close
        </p>
        <h2>What makes Altrady the best crypto trading platform?</h2>
        <p>We make trading easier!</p>
        <Link to="why-altrady" className="btn btn-second btn-learn ml-0 mt-3">
          <ActionBtn />
        </Link>
      </div>
    )
  )
}
export default Popup
