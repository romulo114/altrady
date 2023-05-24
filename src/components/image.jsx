import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

export const useLoadImages = src => {
  const {
    allFile: { nodes },
  } = useStaticQuery(
    graphql`
      query Images {
        allFile {
          nodes {
            base
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    `
  )

  return nodes.find(({ base }) => src === base)
}

export const Image = ({ src, alt, loading, className, ...props }) => {
  let data = useLoadImages(src)

  if (!src) {
    console.error("Image source not added")
    return null
  }

  if (!alt) {
    alt = "Altady trading crypto"
  }

  if (typeof src === "object") {
    if (src.gatsbyImageData) {
      return (
        <GatsbyImage
          image={{ ...src.gatsbyImageData, ...props }}
          alt={alt}
          className={className}
          {...props}
        />
      )
    } else if (src.url) {
      src = src.url
    } else {
      return null
    }
  }

  if (src.includes("prismic.io")) {
    let srcSet = [640, 500, 400, 300, 200, 100, 70, 60, 50, 30].map(size => {
      let uri = new URL(src)
      uri.searchParams.set("w", size.toString())
      return `${uri.toString()} ${size}w`
    })
    let uri = new URL(src)
    uri.searchParams.set("w", "2000")

    let image = {
      images: {
        sources: [],
        fallback: {
          src: uri.toString(),
          srcSet: srcSet.join(", "),
          sizes: "100vw",
        },
      },
      layout: props.width ? "constrained" : "fullWidth",
      width: 1,
      height: 1.0250000000000001,
    }

    return (
      <GatsbyImage
        image={{ ...image, ...props }}
        objectFit={"contain"}
        loading={loading}
        alt={alt}
        className={className}
        {...props}
      />
    )
  }

  if (data) {
    let image = data.childImageSharp.gatsbyImageData

    return (
      <GatsbyImage
        image={{ ...image, ...props }}
        objectFit={"contain"}
        loading={loading}
        alt={alt}
        className={className}
        {...props}
      />
    )
  }
  return <img src={src} alt={alt} className={className} {...props} />
}
