import React from "react"
import AcademyHeader from "../../components/academy-header"
import Footer from "../../components/footer"

const AcademyPageLayout = ({ children }) => {
  return (
    <>
      <AcademyHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default AcademyPageLayout
