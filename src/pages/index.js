import * as React from "react"
import Layout from "../layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Blog from "../components/blog/blog"

import { heroSection, backdrop, img, imgWrapper, imgBlur } from "./index.module.css"
import { graphql } from "gatsby";

const Index = (props) => {

	const postCount = props.data.allWpPost.totalCount

	console.log(props)

	return (
		<Layout>
			<section className={heroSection}>
				<div className={imgWrapper}>
					<h1>Zobacz co u nas się dzieje</h1>
					<StaticImage
						className={img}
						src="../../content/assets/hero.jpg"
						alt=""
					/>
					<div className={backdrop}></div>
				</div>
				{/*
				<StaticImage
						className={imgBlur}
						src="../../content/assets/hero.jpg"
						alt=""
					/>
				*/}

			</section>
			<Blog count={postCount}/>
		</Layout>
	)
}

export const query = graphql`
    query totalCount {
        allWpPost {
            totalCount
        }
    }
`

export default Index
