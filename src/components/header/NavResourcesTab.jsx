import React from "react"
import NavDropdownResourceColumn from "./NavDropdownResourceColumn"
import NavDropdownExchangeColumn from "./NavDropdownExchangeColumn"
import NavDropdownPartnerColumn from "./NavDropdownPartnerColumn"

const NavResourcesTab = ({
  navResourceExchangeData,
  navResourceResourceData,
  navResourcePartnerData,
}) => {
  return (
    <div className="dropdown-content resource-tab">
      <div className="layout-container">
        <div className="row">
          <NavDropdownResourceColumn
            title="Resources"
            content={navResourceResourceData}
          />
          <NavDropdownPartnerColumn
            title="Partners"
            content={navResourcePartnerData}
          />
          <NavDropdownExchangeColumn
            title="Partner exchanges"
            content={navResourceExchangeData}
          />
        </div>
      </div>
    </div>
  )
}

export default NavResourcesTab
