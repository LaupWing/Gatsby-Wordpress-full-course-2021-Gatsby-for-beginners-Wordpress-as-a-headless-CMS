import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import Layout from '../../components/Layout/Layout'
import PostSidebar from '../../components/PostSidebar/PostSidebar'

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
               <PostSidebar
                  date={data.post.date}
                  author={data.post.author.node.name}
                  categories={data.post.categories.nodes}
               />
               <PostContent>
                  <h1 dangerouslySetInnerHTML={{__html: data.post.title}}/>
                  <div dangerouslySetInnerHTML={{__html: data.post.content}}/>
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