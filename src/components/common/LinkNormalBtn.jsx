import React from "react"
import "../style.scss"

const LinkNormalBtn = ({ to = "/", clsName, children }) => {
  return (
    <a href={to} className={"btn btn-normal " + clsName}>
      {children}
    </a>
  )
}

export default LinkNormalBtn
