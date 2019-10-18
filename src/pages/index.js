import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BlogLink,
  BlogTitle,
  PostCount,
  BlogExcerpt,
  PostDate,
  BlogSnippetContainer
} from "../styles/homepage/homepage.styles"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <PostCount>{data.allMarkdownRemark.totalCount} POSTS</PostCount>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogSnippetContainer key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{node.frontmatter.title.toUpperCase()}</BlogTitle>
            </BlogLink>
            <PostDate>{node.frontmatter.date}</PostDate>
            <BlogExcerpt>{node.excerpt}</BlogExcerpt>
          </BlogSnippetContainer>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
