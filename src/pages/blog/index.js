import React from "react"
import { Link, graphql } from "gatsby"
import Container from '../../components/layout/Container'
import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={"Blog"} />
      <Container>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: ASC}
      filter: {fileAbsolutePath: {glob: "**/blog/**"}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "D-M-Y")
        }
        id
        slug
      }
    }
  }
`

export default BlogPage;