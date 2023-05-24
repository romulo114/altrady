const path = require("path")
const linkResolver = require("./src/utils/linkResovler")
const siteUrl = `https://www.altrady.com/`

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Trade Bitcoin`,
    description: `Trade Bitcoin, Altcoins and Etherum with Altrady - All-In-One Multi-Exchange Cryptocurrency Trading Platform.Crypto Community Help. Crypto Trading Software Made Fast and Simple!`,
    keywords: `altrady, bitcoin, website, crypto, trading, cryptocurrency, exchange, platform`,
    siteUrl: siteUrl,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "altrady",
        lang: "*",
        schemas: {
          exchanges: require("./custom_types/exchanges.json"),
          features: require("./custom_types/features.json"),
          partners: require("./custom_types/partners.json"),
          blog_post_api: require("./custom_types/blog_post.json"),
          blog_category: require("./custom_types/blog_category.json"),
          course_category: require("./custom_types/course_category.json"),
          tutorial: require("./custom_types/tutorial.json"),
          roadmap: require("./custom_types/roadmap.json"),
        },
        linkResolver: () => doc => linkResolver(doc),
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allPrismicBlogPostApi {
            nodes {
              data {
                slug
              }
              last_publication_date
            }
          }
          allSitePage {
            nodes {
              path
              context {
                blogDetail {
                  data {
                    slug
                    flag_page
                  }
                }
                exchange {
                  data {
                    flag_page
                  }
                }
                course {
                  data {
                    flag_page
                  }
                }
                feature {
                  data {
                    flag_page
                  }
                }
                tutorial {
                  data {
                    flag_page
                  }
                }
              }
            }
          }
        }
      `,
        output: `/`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allPrismicBlogPostApi: { nodes: allBlogs },
          allSitePage: { nodes: allPages },
        }) => {
          return allPages
            .filter(page => {
              let flagged = [
                "blogDetail",
                "exchange",
                "feature",
                "course",
                "tutorial",
              ].find(type => {
                if (page.context && page.context[type]) {
                  return page.context[type].data.flag_page === true
                } else {
                  return false
                }
              })
              let blacklisted = [
                "/blog-detail/",
                "/category/",
                "/course/",
                "/exchange/",
                "/feature/",
                "/privacy/",
                "/roadmap/",
                "/terms/",
                "/tutorial/",
              ].find(blacklist => page.path === blacklist)

              return !flagged && !blacklisted
            })
            .map(page => {
              let blog = allBlogs.filter(item => {
                return page.path === "/blog/" + item.data.slug
              })
              if (blog.length > 0) return { ...page, ...blog[0] }
              else
                return {
                  ...page,
                  last_publication_date: new Date(),
                }
            })
        },
        serialize: ({ path, last_publication_date }) => {
          return {
            url: path,
            lastmod: last_publication_date,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N6R3CC2",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.altrady.com/",
        sitemap: [
          "https://www.altrady.com/sitemap-0.xml",
          "https://support.altrady.com/sitemap.xml",
        ],
        policy: [
          {
            userAgent: "*",
            disallow: ["/dashboard/", "/lp/black-friday-2020$"],
          },
        ],
        env: {
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-resolve-src`,
      oprions: {
        src: path.resolve(__dirname, "src"),
        utils: path.resolve(__dirname, "utils"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Altrady",
        short_name: "Altrady",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/assets/imgs/favicon.svg",
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.altrady.com/`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 100,
          breakpoints: [480, 750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/imgs`,
      },
    },
  ],
}
