import React from "react"
import CategoryItem from "./CategoryItem"

const NavCategoryTab = ({ navCategoryData }) => {
  return (
    <div className="dropdown-content">
      <div className="layout-container">
        <div className="row">
          <div className="nav-col">
            <h4 className="title">Supported Categories</h4>
            <div className="exchange row">
              {navCategoryData?.map((item, idx) => (
                <CategoryItem
                  title={item.data.name}
                  slug={item.data.slug}
                  imgSrc={item.data.icon}
                  extraCls=" width-lg-20 col-sm-6"
                  key={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavCategoryTab
