import * as React from "react"
import { navigate, Link } from "gatsby"
import Layout from "../layout/layout"
import parse from "html-react-parser"

import {
	wrapper,
	titleClass,
	dateClass,
	galleryContainer,
	btn,
	linksContainer,
	activeImg,
} from "./postDetails.module.css"
import { useState } from "react"

const PostDetails = props => {
	const { post, next, previous } = props.pageContext

	const { title, date } = post
	const content = parse(post.content)
	const gallery = []

	const btnHandler = () => {
		navigate(-1)
	}

	const imgClickHandler = e => {
		console.log(e.target)
		e.target.className += ` ${activeImg}`
	}

	return (
		<Layout>
			<section className={wrapper}>
				<button className={btn} onClick={btnHandler}>
					Powrót
				</button>
				<h1 className={titleClass}>{title}</h1>
				<time className={dateClass}>{date}</time>
				{content.map(item => {
					try {
						if (
							item.props &&
							item.props.className.includes("wp-block-gallery")
						) {
							gallery.push(item)
							return
						}
					} catch (err) {}

					return item
				})}

				<div id="gallery" className={galleryContainer}>
					{gallery.map((item, index) => {
						return <div onClick={imgClickHandler} key={index}>{item}</div>
					})}
				</div>
				<div className={linksContainer}>
					{next && <Link to={`/blog/${next.slug}`}>⬅ {next.title}</Link>}
					{previous && (
						<Link to={`/blog/${previous.slug}`}>{previous.title} ➡</Link>
					)}
				</div>
			</section>
		</Layout>
	)
}

export default PostDetails
