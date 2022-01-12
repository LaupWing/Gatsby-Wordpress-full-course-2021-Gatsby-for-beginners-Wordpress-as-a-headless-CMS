import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Layout from '../../components/Layout/Layout'

const Wrapper = styled.div`
   max-width: 1180px;
   margin: 0 auto;
   padding 20px;
`

const ContentWrapper = styled.div`
   display: block;

   @media (min-width: 992px){
      display:flex
   }
`
const PostContent = styled.div`
   margin-top: 20px;
`

const PostTemplate = ({data}) => {
   return (
      <Layout>
         <Wrapper>
            <BreadCrumb
               parent={{
                  uri: '/blog/all-posts',
                  title: 'blog'
               }}
            />
            <ContentWrapper>
               <PostContent>
                  <h1>Header</h1>
                  <div>Content</div>
               </PostContent>
            </ContentWrapper>
         </Wrapper>
      </Layout>
   )
}

export default PostTemplate

export const pageQuery = graphql`
   query($id: String!){
      post: wpPost(id: { eq $id}){
         title
         content
         author{
            node{
               name
            }
         }
         date(formatString: "DD MM YYYY")
         categories:{
            nodes {
               id
               name
               uri
               slug
            }
         }
      }
   }

`