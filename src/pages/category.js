import React from "react"
import { graphql } from "gatsby"
import BlogPageLayout from "../layouts/BlogPageLayout"
import BlogDetailList from "../sections/blog-detail-list"
import Seo from "../components/seo"

const Category = ({ data, pageContext }) => {
  const { blogCategory } = pageContext
  const categories = data?.allPrismicBlogCategory.nodes
  const currentCatetgory = blogCategory?.data
  const blogData = data?.allPrismicBlogPostApi.nodes.filter(
    item => item.data.category.id === blogCategory?.prismicId
  )
  return (
    <BlogPageLayout>
      <Seo
        title={currentCatetgory?.meta_title}
        description={currentCatetgory?.meta_description}
        keywords={currentCatetgory?.meta_keywords}
      />
      <h1 className="category-name">{currentCatetgory?.name}</h1>
      <div className="layout-container">
        <BlogDetailList
          blogData={blogData}
          categories={categories}
          type="category"
        />
      </div>
    </BlogPageLayout>
  )
}

export const query = graphql`
  query Category {
    allPrismicBlogPostApi {
      nodes {
        data {
          category {
            id
          }
          date
          thumbnail {
            url
          }
          title
          slug
        }
      }
    }
    allPrismicBlogCategory {
      nodes {
        data {
          slug
          color
          name
          meta_title
          meta_keywords
          meta_description
        }
        prismicId
      }
    }
  }
`

export default Category
