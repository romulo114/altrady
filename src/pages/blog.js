import React from "react"
import BlogPageLayout from "../layouts/BlogPageLayout"
import BlogHeroSection from "../sections/blog-hero"
import BlogList1 from "../sections/blog-list1"
import BlogList2 from "../sections/blog-list2"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"

const Blog = ({ data }) => {
  const blogData = data.allPrismicBlogPostApi.nodes
  const blogHeaderData = blogData
    .filter(item => item.data.featured === true)
    .slice(0, 5)
  const categories = data.allPrismicBlogCategory.nodes
  return (
    <BlogPageLayout>
      <Seo
        title="Altrady Crypto Trading News"
        description="Altrady Crypto Trading News. Learn to crypto trade with our resources. Bitcoin and altcoins trading."
        slug="/blog"
      />
      <div className="layout-container">
        <BlogHeroSection blogData={blogHeaderData} categories={categories} />
        <a href="https://coindelist.com/">
          <div className="coindelist"></div>
        </a>
        <BlogList1 blogData={blogData} categories={categories} />
        <Link to="/coinigy">
          <div className="trading-mode"></div>
        </Link>
        <BlogList2 blogData={blogData} categories={categories} />
      </div>
    </BlogPageLayout>
  )
}

export const query = graphql`
  query Blog {
    allPrismicBlogCategory {
      nodes {
        data {
          color
          meta_title
          meta_keywords
          meta_description
          icon {
            url
          }
          slug
          name
        }
        prismicId
      }
    }
    allPrismicBlogPostApi(sort: { fields: data___date, order: DESC }) {
      nodes {
        data {
          title
          slug
          featured
          date
          category {
            id
          }
          summary
          thumbnail {
            alt
            url
          }
        }
      }
    }
  }
`

export default Blog
