import * as React from "react"
import { graphql } from "gatsby"
import { InlineWidget } from "react-calendly";

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Contact" />
        <div className="xl:container xl:mx-auto py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row justify-center items-center items-strech h-full mx-4">
                <div className="lg:w-full 2xl:w-3/5">
                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 w-11/12">Get in touch</h1>
                    <p className="mt-3 lg:mt-4 text-base leading-normal text-gray-600 md:w-8/12 2xl:w-7/12">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age so</p>
                </div>
                <div className="lg:w-full 2xl:w-2/5 flex w-full bg-gray-50 flex flex-col justify-center px-5 py-5 mt-2 md:mt-6 lg:mt-0">
                    <InlineWidget url="https://calendly.com/montycode" />
                </div>
            </div>
        </div>
      </Layout>
    )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`