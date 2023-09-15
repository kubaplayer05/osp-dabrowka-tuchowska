import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import {
	container,
	postPreview,
	postHeader,
	sectionTitle,
	pages,
	next,
} from "../components/blog/blog.module.css"
import Layout from "../layout/layout"

const BlogPage = ({ data }) => {
	const posts = data.allWpPost.nodes
	const { pageInfo } = data.allWpPost

	console.log(data)

	return (
		<Layout>
			<section className={container}>
				<h2 className={sectionTitle}>Aktualności</h2>
				{posts.map(post => {
					return (
						<Link
							to={`/blog/${post.slug}`}
							className={postPreview}
							key={post.id}
						>
							<header className={postHeader}>
								<h3>{post.title}</h3>
								<small>{post.date}</small>
							</header>
							{parse(post.excerpt)}
						</Link>
					)
				})}
				<div className={pages}>
					{pageInfo.hasPreviousPage && (
						<Link to={`/page/${pageInfo.currentPage - 1}`}>
							Poprzednia strona
						</Link>
					)}
					{pageInfo.hasNextPage && (
						<Link to={`/page/${pageInfo.currentPage + 1}`} className={next}>
							Następna strona
						</Link>
					)}
				</div>
			</section>
		</Layout>
	)
}

export const query = graphql`
    query postsList($offset: Int) {
        allWpPost(sort: { date: DESC }, limit: 5, skip: $offset) {
            nodes {
                date(formatString: "DD/MM/YYYY")
                excerpt
                id
                slug
                title
            }
            pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
            }
        }
    }
`

export default BlogPage
