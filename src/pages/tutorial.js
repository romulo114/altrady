import React from "react"
import AcademyPageLayout from "../layouts/AcademyPageLayout"
import JoinNowSection from "../sections/join-now"
import TutorialSection from "../sections/tutorials"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Tutorial = ({ pageContext, data }) => {
  const { tutorial } = pageContext
  const currentTutorial = tutorial?.data
  const categoryId = currentTutorial?.category.id
  const tutorialList = data?.allPrismicTutorial.nodes.filter(
    item => item.data.category.id === categoryId
  )

  return (
    <AcademyPageLayout>
      <Seo
        title={currentTutorial?.meta_title}
        description={currentTutorial?.meta_description}
        keywords={currentTutorial?.meta_keywords}
      />
      <TutorialSection
        currentTutorial={currentTutorial}
        tutorialList={tutorialList}
      />
      <JoinNowSection type="academy" />
    </AcademyPageLayout>
  )
}

export const query = graphql`
  query Tutorial {
    allPrismicCourseCategory {
      nodes {
        data {
          name
          slug
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
          description {
            raw
          }
          video_embed
        }
      }
    }
  }
`

export default Tutorial
