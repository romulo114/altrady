import React from "react"
import NavFeatureItem from "../common/NavFeatureItem"

const NavDropdownFeatureColumn = ({ title, content }) => {
  return (
    <div className="col-lg-4 nav-col">
      <h4 className="title">{title}</h4>
      <div className="row flex-column">
        {content &&
          content.map((item, idx) => (
            <NavFeatureItem
              title={item.data?.name}
              content={item.data?.description}
              slug={item.data?.slug}
              imgSrc={item.data?.img}
              key={idx}
            />
          ))}
      </div>
    </div>
  )
}

export default NavDropdownFeatureColumn
