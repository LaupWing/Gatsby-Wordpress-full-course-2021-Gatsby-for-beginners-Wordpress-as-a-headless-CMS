import * as React from "react"
import CTAArea from "../components/CTAArea/CTAArea"
import Hero from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Layout from "../components/Layout/Layout"
import Quote from "../components/Quote/Quote"

import Seo from "../components/SEO/SEO"

const IndexPage = () => (
   <Layout>
      <Seo title="Home" />
      <Hero/>
      <CTAArea/>
      <LatestBlogPost/>
      <Quote/>
   </Layout>
)

export default IndexPage