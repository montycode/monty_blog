import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="container mx-auto px-4 xl:px-0 py-4 sm:py-8"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <p class="mb-4 mb-3 text-purple-500 text-lg">{post.frontmatter.category}</p>
          <h1 class="text-5xl text-gray-800 font-medium mb-8" itemProp="headline">{post.frontmatter.title}</h1>
          <p class="text-gray-700 text-2xl mb-4">{post.frontmatter.date}</p>
          {post?.frontmatter.tags && (
            <div className="md:-mx-2 flex items-center flex-wrap mb-8">
                {post?.frontmatter.tags.map(tag =>{
                  const name = tag.name

                  return(
                    <div key={tag.id} className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                        <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">#{name}</p>
                    </div>
                  )
                })}
            </div>
          )}
          {post?.frontmatter.cover && (
            <div class="h-96 w-full relative border-b border-gray-300 mb-12">
              <img src={post?.frontmatter.cover} alt={post.frontmatter.title} class="h-full w-full object-cover overflow-hidden shadow" />
          </div>
          )}
        </header>
        <section className="container mx-auto px-4 xl:px-0 py-4 sm:py-8 blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav p-8">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} className="focus:outline-none focus:text-purple-500 hover:text-purple-500"  rel="prev">
                <div className="mt-14 flex items-right justify-end">
                    <button className="flex items-center justify-center mt-7 md:text-sm md:text-lg text-sm rounded f-m-m font-semibold text-purple-700 focus:outline-none xl:leading-4 hover:underline hover:text-purple-800">
                    ← {previous.frontmatter.title}
                    </button>
                </div>
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} className="focus:outline-none focus:text-purple-500 hover:text-purple-500" rel="next">
                  <div className="mt-14 flex items-right justify-end">
                      <button className="flex items-center justify-center mt-7 md:text-sm md:text-lg text-sm rounded f-m-m font-semibold text-purple-700 focus:outline-none xl:leading-4 hover:underline hover:text-purple-800">
                        {next.frontmatter.title} →
                      </button>
                  </div>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        cover
        category
        tags{
          name
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
