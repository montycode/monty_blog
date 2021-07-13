/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Author from '../images/profile-pic.jpg'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            position
          }
          social {
            twitter
            instagram
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="w-full bg-gray-100 py-16">
        <div className="container relative mx-auto">
            <div className="absolute -mt-16 top-0">
                <svg width={151} height={104} xmlns="http://www.w3.org/2000/svg">
                    <g fill="#667EEA" fillRule="evenodd">
                        <rect x=".88" width={3} height={3} rx="1.5" />
                        <rect x="17.88" width={3} height={3} rx="1.5" />
                        <rect x="32.88" width={3} height={3} rx="1.5" />
                        <rect x="49.88" width={3} height={3} rx="1.5" />
                        <rect x="65.88" width={3} height={3} rx="1.5" />
                        <rect x="82.88" width={3} height={3} rx="1.5" />
                        <rect x="98.88" width={3} height={3} rx="1.5" />
                        <rect x="115.88" width={3} height={3} rx="1.5" />
                        <rect x="131.88" width={3} height={3} rx="1.5" />
                        <rect x="147.88" width={3} height={3} rx="1.5" />
                        <rect x=".88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={101} width={3} height={3} rx="1.5" />
                    </g>
                </svg>
            </div>
            <div className="absolute -mb-16 bottom-0 right-0">
                <svg width={151} height={104} xmlns="http://www.w3.org/2000/svg">
                    <g fill="#667EEA" fillRule="evenodd">
                        <rect x=".88" width={3} height={3} rx="1.5" />
                        <rect x="17.88" width={3} height={3} rx="1.5" />
                        <rect x="32.88" width={3} height={3} rx="1.5" />
                        <rect x="49.88" width={3} height={3} rx="1.5" />
                        <rect x="65.88" width={3} height={3} rx="1.5" />
                        <rect x="82.88" width={3} height={3} rx="1.5" />
                        <rect x="98.88" width={3} height={3} rx="1.5" />
                        <rect x="115.88" width={3} height={3} rx="1.5" />
                        <rect x="131.88" width={3} height={3} rx="1.5" />
                        <rect x="147.88" width={3} height={3} rx="1.5" />
                        <rect x=".88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={13} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={25} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={38} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={51} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={63} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={76} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={89} width={3} height={3} rx="1.5" />
                        <rect x=".88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="17.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="32.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="49.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="65.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="82.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="98.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="115.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="131.88" y={101} width={3} height={3} rx="1.5" />
                        <rect x="147.88" y={101} width={3} height={3} rx="1.5" />
                    </g>
                </svg>
            </div>
            <section>
              {author?.name && (
                <figure className="block">
                    <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                        <div className="flex items-center justify-between pb-8">
                            <div className="xl:flex md:flex lg:flex sm:flex items-center">
                                <div className="h-20 w-20">
                                  <img src={Author} alt="MontyCode" className="rounded-full object-cover h-full w-full shadow" />
                                </div>
                                <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                                    <p className="text-xl text-gray-600 font-bold">{author.name}</p>
                                    <p className="sm:text-xl text-sm text-purple-500">{author.position}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-base text-gray-600 pb-6 w-full sm:w-10/12">{author?.summary || null}</p>
                        <div className="w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
                            <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                                <div>
                                    <a href={`https://twitter.com/${social?.twitter || ``}`}>
                                        <svg aria-label="Twitter" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <a href={`https://instagram.com/${social?.instagram || ``}`}>
                                        <svg aria-label="Instagram" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <a href={`https://github.com/${social?.github || ``}`}>
                                        <svg aria-label="Github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </figure>
              )}
            </section>
        </div>
    </div>
  )
}

export default Bio
