import React from "react"
import { Elements } from "prismic-richtext"
import { getLink, getAttr } from "."
// -- Function to add unique key to props
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

// -- HTML Serializer
const htmlSerializer = function (type, element, content, children, key) {
  var props = {}
  switch (type) {
    case Elements.heading1: // Heading 1
      return React.createElement("h1", propsWithUniqueKey(props, key), children)

    case Elements.heading2: // Heading 2
      return React.createElement("h2", propsWithUniqueKey(props, key), children)

    case Elements.heading3: // Heading 3
      return React.createElement("h3", propsWithUniqueKey(props, key), children)

    case Elements.heading4: // Heading 4
      return React.createElement("h4", propsWithUniqueKey(props, key), children)

    case Elements.heading5: // Heading 5
      return React.createElement("h5", propsWithUniqueKey(props, key), children)

    case Elements.heading6: // Heading 6
      return React.createElement("h6", propsWithUniqueKey(props, key), children)

    case Elements.paragraph: // Paragraph
      return React.createElement("p", propsWithUniqueKey(props, key), children)

    case Elements.preformatted: // Preformatted
      return React.createElement(
        "pre",
        propsWithUniqueKey(props, key),
        children
      )

    case Elements.strong: // Strong
      return React.createElement(
        "strong",
        propsWithUniqueKey(props, key),
        children
      )

    case Elements.hyperlink: // Hyperlinks
      const attr = getAttr(children[0])
      const relAttr = attr ? { rel: attr.rel } : { rel: "noopener" }
      const targetAttr = attr ? { target: attr.target } : { target: "" }
      props = Object.assign(
        {
          className: "link-class",
          href:
            element.data?.link_type === "Web"
              ? element.data?.url
              : element.data?.type === "blog_post_api" ||
                element.data?.type === "blog_category"
              ? "/blog/" + element.data?.slug
              : element.data?.type === "features"
              ? "/" + element.data?.slug
              : element.data?.type === "tutorial"
              ? "/academy/" + element.data?.slug
              : "/" + element.data?.type + "/" + element.data?.slug,
        },
        targetAttr,
        relAttr
      )
      return React.createElement(
        "a",
        propsWithUniqueKey(props, key),
        getLink(children[0])
      )

    case Elements.em: // Emphasis
      return React.createElement("em", propsWithUniqueKey(props, key), children)

    case Elements.listItem: // Unordered List Item
      return React.createElement("li", propsWithUniqueKey(props, key), children)

    case Elements.oListItem: // Ordered List Item
      return React.createElement("li", propsWithUniqueKey(props, key), children)

    case Elements.list: // Unordered List
      return React.createElement("ul", propsWithUniqueKey(props, key), children)

    case Elements.oList: // Ordered List
      return React.createElement("ol", propsWithUniqueKey(props, key), children)

    case Elements.image: // Image
      props = { src: element.url, alt: element.alt || "" }
      return React.createElement("img", propsWithUniqueKey(props, key))

    case Elements.embed: // Embed
      props = Object.assign(
        {
          "data-oembed": element.oembed.embed_url,
          "data-oembed-type": element.oembed.type,
          "data-oembed-provider": element.oembed.provider_name,
        },
        element.label ? { className: element.label } : {}
      )
      const embedHtml = React.createElement("div", {
        dangerouslySetInnerHTML: { __html: element.oembed.html },
      })
      return React.createElement(
        "div",
        propsWithUniqueKey(props, key),
        embedHtml
      )

    case Elements.label: // Label
      props = element.data
        ? Object.assign({}, { className: element.data.label })
        : {}
      return React.createElement(
        "span",
        propsWithUniqueKey(props, key),
        children
      )

    case Elements.span: // Span
      if (content) {
        return content.split("\\n").reduce((acc, p) => {
          if (acc.length === 0) {
            return [p]
          } else {
            const brIndex = (acc.length + 1) / 2 - 1
            const br = React.createElement(
              "br",
              propsWithUniqueKey({}, brIndex)
            )
            return acc.concat([br, p])
          }
        }, [])
      } else {
        return null
      }

    default:
      // Always include a default that returns null
      return null
  }
}

export default htmlSerializer
