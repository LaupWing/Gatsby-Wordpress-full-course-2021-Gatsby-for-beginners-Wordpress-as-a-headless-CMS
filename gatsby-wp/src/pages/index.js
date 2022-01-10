import * as React from "react"
import CTAArea from "../components/CTAArea/CTAArea"
import Hero from "../components/Hero/Hero"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Layout from "../components/Layout/Layout"

import Seo from "../components/SEO/SEO"

const IndexPage = () => (
   <Layout>
      <Seo title="Home" />
      <Hero/>
      <CTAArea/>
      <LatestBlogPost/>
   </Layout>
)

export default IndexPage