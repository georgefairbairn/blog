import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { PostTitle, PostContent } from '../styles/blog-post/blog-post.styles'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <PostTitle>{post.frontmatter.title.toUpperCase()}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`