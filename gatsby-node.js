const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPageTemplate = path.resolve(`src/templates/blog-page.js`)

	const postsPerPage = 5

	const result = await graphql(`
        query {
            allWpPost(limit: ${postsPerPage}) {
                pageInfo {
					pageCount
				}
            }
        }
	`)

	const {pageCount} = result.data.allWpPost.pageInfo

	for(let i = 1; i <= pageCount; i++) {
		createPage({
			path: `/page/${i}`,
			component: blogPageTemplate,
			context: {
				offset: postsPerPage * (i - 1)
			}
		})
	}
}

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions
	const postTemplate = path.resolve("src/templates/post.js")

	const result = await graphql(`
        query {
            allWpPost(sort: {date: DESC}) {
                nodes {
                    id
                    slug
                    content
                    title
                    date(formatString: "DD.MM.YYYY")
                }
                edges {
                    next {
						title
                        slug
                    }
                    previous {
						title
                        slug
                    }
                }
            }
        }
	`)

	const {nodes, edges} = result.data.allWpPost

	nodes.forEach((post, index) => {
		createPage({
			path: `/blog/${post.slug}`,
			component: postTemplate,
			context: {
				post,
				next: edges[index].next,
				previous: edges[index].previous,
			}
		})
	})

}
