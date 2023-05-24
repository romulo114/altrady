import React from "react"
import NavPartnerItem from "../common/NavPartnerItem"

const NavDropdownPartnerColumn = ({ title, content }) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">{title}</h4>
      <div className="row flex-column">
        {content &&
          content.map((item, idx) => (
            <NavPartnerItem
              title={item.name}
              content={item.description}
              slug={item.slug}
              imgSrc={item.icon}
              key={idx}
            />
          ))}
      </div>
    </div>
  )
}

export default NavDropdownPartnerColumn
