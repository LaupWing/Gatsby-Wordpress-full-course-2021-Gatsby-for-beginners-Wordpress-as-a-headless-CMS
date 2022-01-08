import * as React from "react"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"

import Seo from "../components/SEO/SEO"

const IndexPage = () => (
   <Layout>
      <Seo title="Home" />
      <Hero/>
   </Layout>
)

export default IndexPage