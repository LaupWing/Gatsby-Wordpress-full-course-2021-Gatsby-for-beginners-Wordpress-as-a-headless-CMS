import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import { Wrapper } from './archive.styles'

const archive = ({data: {allWpPost}}) => {
   return (
      <Layout>
         <StaticImage
            src='../images/archive_headerimage.png'
            placeholder='TRACED_SVG'
            width={1920}
            height={300}
            alt='Archive Hero'
         />
         <Wrapper>
            <BreadCrumb
               parent={{
                  uri: "/blog/all-posts",
                  title: 'blog'
               }}
            />
         </Wrapper>
      </Layout>
   )
}

export default archive

export const pageQuery = graphql`
   query($catId: String!, $skip: Int!, $limit: Int!){
      allWpPost(
         filter: { categories: {nodes: {elemMatch: { id: { eq: $catId}}}}}
         skip: $skip
         limit: $limit
      ) {
         edges {
            node {
               id
               title
               excerpt
               uri
               slug
               date(formatString: "DD MM YYYY")
            }
         }
      }
   }
`