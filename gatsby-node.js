const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPageTemplate = path.resolve(`src/templates/blog-page.js`)
  const postTemplate = path.resolve("src/templates/post.js")
  const postsPerPage = 5

  // create blog page

  const pageInfoQuery = await graphql(`
      query {
          allWpPost(limit: ${postsPerPage}) {
              pageInfo {
                  pageCount
              }
          }
      }
  `)
  const { pageCount } = pageInfoQuery.data.allWpPost.pageInfo

  for (let i = 1; i <= pageCount; i++) {
    const offset = (i - 1) * postsPerPage

    const blogPageQuery = await graphql(`
        query postsList {
            allWpPost(sort: { date: DESC }, limit: ${postsPerPage}, skip: ${offset}) {
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
            }}`)
    const { nodes, pageInfo } = blogPageQuery.data.allWpPost

    createPage({
      path: `/page/${i}`,
      component: blogPageTemplate,
      context: {
        posts: nodes,
        pageInfo: pageInfo,
      },
    })
  }

  // create post pages

  const postQuery = await graphql(`
    query {
      allWpPost(sort: { date: DESC }) {
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
  const { nodes, edges } = postQuery.data.allWpPost

  nodes.forEach((post, index) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: postTemplate,
      defer: index + 1 > 30,
      context: {
        post,
        next: edges[index].next,
        previous: edges[index].previous,
      },
    })
  })
}
