import React from "react"
import AcademyPageLayout from "../layouts/AcademyPageLayout"
import HeroComponent from "../components/hero"
import JoinNowSection from "../sections/join-now"
import CourseDetail from "../sections/courses/course-detail"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Course = ({ pageContext, data }) => {
  const { course } = pageContext
  const categoryData = course?.data
  const tutorialData = data?.allPrismicTutorial.nodes.filter(
    item => item.data.category.id === course?.prismicId
  )
  return (
    <AcademyPageLayout>
      <Seo
        title="Altrady - Crypto Academy To Expand Your Trading Knowledge"
        description="Altrady brings to you his cryptocurrency academy to help beginners and more advanced crypto traders with their trading strategy."
      />
      <HeroComponent
        clsName="section hero academy"
        headerContent={categoryData?.name}
        sectionContent={categoryData?.description}
        heroImg={categoryData?.course_cover.url}
        slug={categoryData?.slug}
        type="course"
      />
      <CourseDetail
        categoryData={categoryData}
        tutorialData={tutorialData}
        type="course"
      />
      <JoinNowSection type="academy" />
    </AcademyPageLayout>
  )
}

export const query = graphql`
  query Course {
    allPrismicTutorial(sort: { order: ASC, fields: first_publication_date }) {
      nodes {
        data {
          category {
            id
          }
          name
          duration
          slug
        }
      }
    }
  }
`

export default Course
