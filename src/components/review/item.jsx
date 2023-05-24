import React from "react"
import { ReviewMark } from "../../utils/imgLoader"
import { Image } from "../image"

const ReviewItem = ({ userName, review }) => {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="review-item">
        <Image
          alt="review"
          src={ReviewMark}
          className="review-item__mark "
          height={20}
          width={105}
        />
        <p className="username">{userName}</p>
        <p className="review">{review}</p>
      </div>
    </div>
  )
}

export default ReviewItem
