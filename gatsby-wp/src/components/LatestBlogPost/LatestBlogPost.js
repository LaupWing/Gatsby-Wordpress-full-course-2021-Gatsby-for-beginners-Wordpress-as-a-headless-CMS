import { Link } from 'gatsby'
import React from 'react'
import { useLatestBlogPost } from '../../hooks/useLatestBlogPost'
import { Wrapper } from './LatesBlogPost.styles'

const LatestBlogPost = () => {
   const data = useLatestBlogPost()


   return (
      <Wrapper>
         <h2>Latest Blog Post</h2>
         <h4>{data.allWpPost.edges[0].node.title}</h4>
         <div
            dangerouslySetInnerHTML={{
               __html: data.allWpPost.edges[0].node.excerpt
            }}
         >
            
         </div>
         <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
            <h5>Read more</h5>
         </Link>
      </Wrapper>
   )
}

export default LatestBlogPost
