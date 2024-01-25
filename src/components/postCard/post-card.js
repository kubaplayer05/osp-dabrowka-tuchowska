import * as React from "react"
import parse from "html-react-parser"
import { Link } from "gatsby"

import { postPreview, postHeader } from "./postcard.module.css"

const PostCard = ({ data }) => {
  return (
    <Link to={`/blog/${data.slug}`} className={postPreview} key={data.id}>
      <header className={postHeader}>
        <h3>{data.title}</h3>
        <small>{data.date}</small>
      </header>
      {parse(data.excerpt)}
    </Link>
  )
}

export default PostCard
