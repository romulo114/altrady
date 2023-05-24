import React from "react"
import { Link } from "gatsby"
import { Image } from "../../components/image"

const BlogDetailHero = ({
  blogData,
  categories,
  currentBlog,
  currentCategory,
}) => {
  const categoryId = blogData?.category.id
  let color = ""
  let type = ""
  let slug = ""
  categories &&
    categories.forEach(item => {
      if (item.prismicId === categoryId) {
        color = item.data.color
        type = item.data.name
        slug = item.data.slug
      }
    })
  return (
    <div className="blog-detail-hero position-relative">
      <Image
        src={blogData?.thumbnail}
        alt={blogData?.thumbnail.alt}
        className="blog-detail-bk w-100 h-600 "
      />
      <div className="layout-container position-absolute blog-detail-hero__container">
        <Link to={`/blog/${slug}`} className="category-link">
          <p className={"caption blog-detail-hero__type color-white " + color}>
            {type}
          </p>
        </Link>
        <h3 className="blog-detail-hero__title">{blogData?.title}</h3>
        <div className="__breadcrumb blog-breadcrumb mb-3">
          <Link to="/blog" className="pr-2 ">
            Altrady Blog
          </Link>
          /
          <Link
            to={`/blog/${currentCategory[0]?.data.slug}`}
            className="pl-2 pr-2"
          >
            {currentCategory[0]?.data.name}
          </Link>
          /
          <Link to={`/blog/${currentBlog?.slug}`} className="pl-2">
            {currentBlog?.title}
          </Link>
        </div>
        <p className="caption blog-detail-hero__date color-dark-tertiary">
          {blogData?.date}
        </p>
      </div>
    </div>
  )
}

export default BlogDetailHero
