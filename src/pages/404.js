import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
        <div className="flex w-full flex-col items-center justif-center py-16 xl:px-0 px-4">
          <h1 className="lg:text-6xl text-3xl text-indigo-700 font-bold text-center">404: Not Found</h1>
          <h2 className="lg:text-2xl text-lg text-gray-600 pt-6 text-centerlg:mb-0 mb-4">You just hit a route that doesn&#39;t exist... the sadness.</h2>
          <div className="sm:flex justify-center items-center pt-12">
              <Link className="w-full sm:w-auto py-4 px-8 bg-indigo-700 text-white lg:text-2xl border border border-indigo-700 hover:opacity-75 text-lg mr-4 focus:outline-none" to='/'>Go Home</Link>
          </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
