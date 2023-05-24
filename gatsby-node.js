const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllDetailPage {
      allPrismicExchanges(sort: { order: ASC, fields: data___position }) {
        nodes {
          data {
            meta_title
            meta_keywords
            meta_description
            flag_page
            name
            type_group {
              support
              select_type
            }
            short_description
            slug
            stats {
              numMarkets
              numCoins
              usdVolume
            }
            exchange_url
            icon {
              url
              gatsbyImageData
            }
            section_title
            section_subtitle
            benefit_group {
              title
              content
              image {
                alt
                url
                gatsbyImageData
              }
            }
            exchange_feature {
              kicker
              title
              text
              btn_name
              feature_slug
              feature_image {
                url
                alt
                gatsbyImageData
              }
            }
          }
        }
      }
      allPrismicBlogCategory {
        nodes {
          data {
            slug
            color
            meta_title
            meta_keywords
            meta_description
            name
          }
          prismicId
        }
      }
      allPrismicBlogPostApi(sort: { fields: data___date, order: DESC }) {
        nodes {
          data {
            meta_title
            meta_keywords
            meta_description
            flag_page
            title
            slug
            featured
            date
            category {
              id
            }
            content {
              raw
            }
            summary
            thumbnail {
              url
              alt
              gatsbyImageData
            }
          }
          last_publication_date
        }
      }
      allPrismicFeatures(sort: { order: ASC, fields: data___priority }) {
        nodes {
          data {
            meta_title
            meta_keywords
            meta_description
            flag_page
            description
            name
            slug
            featured_in_navbar
            content
            feature_group {
              content
              header
              icon {
                url
                alt
                gatsbyImageData
              }
              kicker
            }
            header
            img {
              url
              alt
            }
            icon {
              alt
              url
              gatsbyImageData
            }
            other_features {
              title
              desc
              url
              icon {
                alt
                url
                gatsbyImageData
              }
            }
            section_title
            type
            kicker
          }
          last_publication_date
        }
      }
      allPrismicCourseCategory {
        nodes {
          data {
            name
            description
            flag_page
            text
            slug
            course_cover {
              url
              gatsbyImageData
            }
          }
          prismicId
        }
      }
      allPrismicTutorial(sort: { order: ASC, fields: first_publication_date }) {
        nodes {
          data {
            flag_page
            meta_title
            meta_keywords
            meta_description
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
          last_publication_date
        }
      }
    }
  `)

  const exchangeTemplate = path.resolve(`src/pages/exchange.js`)
  const blogCategoryTemplate = path.resolve(`src/pages/category.js`)
  const blogTemplate = path.resolve(`src/pages/blog-detail.js`)
  const featureTemplate = path.resolve(`src/pages/feature.js`)
  const courseTemplate = path.resolve(`src/pages/course.js`)
  const tutorialTemplate = path.resolve(`src/pages/tutorial.js`)

  queryResults.data.allPrismicExchanges.nodes.forEach(node => {
    createPage({
      path: `/exchanges/${node.data.slug}`,
      component: exchangeTemplate,
      context: {
        exchange: node,
      },
    })
  })

  queryResults.data.allPrismicBlogCategory.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.data.slug}`,
      component: blogCategoryTemplate,
      context: {
        blogCategory: node,
      },
    })
  })

  queryResults.data.allPrismicBlogPostApi.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.data.slug}`,
      component: blogTemplate,
      context: {
        blogDetail: node,
      },
    })
  })

  queryResults.data.allPrismicFeatures.nodes.forEach(node => {
    createPage({
      path: `/${node.data.slug}`,
      component: featureTemplate,
      context: {
        feature: node,
      },
    })
  })

  queryResults.data.allPrismicCourseCategory.nodes.forEach(node => {
    createPage({
      path: `/academy/${node.data.slug}`,
      component: courseTemplate,
      context: {
        course: node,
      },
    })
  })

  queryResults.data.allPrismicTutorial.nodes.forEach(node => {
    createPage({
      path: `/academy/${node.data.slug}`,
      component: tutorialTemplate,
      context: {
        tutorial: node,
      },
    })
  })
}
