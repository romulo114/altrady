import React from "react"
import AcademyPageLayout from "../../layouts/AcademyPageLayout"
import CoursesHero from "../../components/courses-hero"
import CourseSection from "../../sections/courses"
import JoinNowSection from "../../sections/join-now"
import Seo from "../../components/seo"
import { graphql } from "gatsby"

const headerContent = `Our Courses`
const sectionContent = `We believe it is important that you know what we’re building, and we’d love to hear your feedback and other feature requests.`

const AcademyCourses = ({ data }) => {
  const categoryData = data.allPrismicCourseCategory.nodes
  const tutorialData = data.allPrismicTutorial.nodes
  return (
    <AcademyPageLayout>
      <Seo
        title="Altrady - Crypto Academy To Expand Your Trading Knowledge"
        description="Altrady brings to you his cryptocurrency academy to help beginners and more advanced crypto traders with their trading strategy."
      />
      <CoursesHero
        clsName="section hero academy"
        headerContent={headerContent}
        sectionContent={sectionContent}
        kickerText="Learn crypto trading"
        type="academy"
      />
      <CourseSection categoryData={categoryData} tutorialData={tutorialData} />
      <JoinNowSection type="academy" />
    </AcademyPageLayout>
  )
}

export const query = graphql`
  query AcademyCourses {
    allPrismicCourseCategory {
      nodes {
        data {
          name
          description
          slug
          course_cover {
            url
          }
        }
        prismicId
      }
    }
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

export default AcademyCourses
