import React from "react"
import BlogItem from "../../components/blog-item"

const BlogDetailList = ({ blogData, categories, type }) => {
  return (
    <div className="blog-detail-list mb-5">
      {type === "blog" && (
        <h4 className="more-blogs tablet-hide">More blogs</h4>
      )}
      <div className="row blog-item-container">
        {blogData?.map((item, idx) => (
          <BlogItem
            {...item}
            size="small "
            clsName="col-lg-3 col-sm-6"
            categories={categories}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogDetailList
