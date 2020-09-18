/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityRanch(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            ranchName
            description
            slug {
              current
            }
            profileImage {
              asset {
                url
              }
            }
            headerImage {
              asset {
                url
              }
            }
            address
            email
            phone
            id
            state
            city
            zip
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const projects = result.data.allSanityRanch.edges || []
  projects.forEach((edge, index) => {
    const path = `/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/ranchProfile.js"),
      context: { ranch: edge.node },
    })
  })
}