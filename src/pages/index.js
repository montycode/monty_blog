import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Blog" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blog" />
      <Bio />
      
      <div className="flex w-full justify-center py-12 px-4">
          <div className="w-full lg:w-11/12 2xl:w-9/12 space-y-4">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <div className="md:flex items-start bg-gray-100 p-4" key={post.id}>
                    {post?.frontmatter.cover && (<img className="mt-6 md:max-w-xs md:w-auto object-cover object-center" alt={title} src={post.frontmatter.cover} />)}
                    <div className="pt-8 md:pl-8 lg:pl-16 lg:pt-4 pb-4">
                        <div className="flex items-center">
                            {post?.frontmatter.category && (
                              <>
                                <p className="text-sm lg:text-base leading-none uppercase text-gray-500 dark:text-gray-300">{post.frontmatter.category}</p>
                                <div className="w-1 h-1 bg-gray-500 dark:bg-gray-300 rounded-full mx-2" />
                              </>
                            )}
                            <p className="text-sm lg:text-base leading-none text-gray-500 dark:text-gray-300">{post.frontmatter.date}</p>
                        </div>
                        <div className="py-2 xl:py-4">
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                                <p className="text-2xl lg:text-4xl font-bold xl:leading-10 text-gray-900 dark:text-gray-50" itemProp="headline">{title}</p>
                            </Link>
                          </h2>
                        </div>
                        <div>
                            <div className="text-base lg:text-xl leading-7 text-gray-600 dark:text-gray-400">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: post.frontmatter.description || post.excerpt,
                                }}
                                itemProp="description"
                              />
                            </div>
                        </div>
                        <div className="w-full justify-between mt-4 items-center">
                          {post?.frontmatter.tags && (
                              <div className="md:-mx-2 flex items-center flex-wrap">
                                  {post?.frontmatter.tags.map(tag =>{
                                    const name = tag.name

                                    return(
                                      <div key={tag.id} className="flex items-center justify-center p-2 m-2 bg-gray-200 dark:bg-gray-800 rounded">
                                          <p className="text-sm lg:text-base leading-none text-gray-600 dark:text-gray-300">{name}</p>
                                      </div>
                                    )
                                  })}
                              </div>
                            )}
                            <div className="mt-4">
                                <div className="xl:mt-2 lg:mt-16 mt-0">
                                    <div className="flex items-end justify-between">
                                        <div className="flex space-x-1 items-center justify-end  text-gray-500">
                                          <Link to={post.fields.slug} itemProp="url">
                                            <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read More</p>
                                          </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          cover
          description
          category
          tags{
            name
          }
        }
      }
    }
  }
`
