import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ArchiveSidebar from '../components/ArchiveSidebar/ArchiveSidebar'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import Pagination from '../components/Pagination/Pagination'
import { ContentWrapper, PageContent, StyledDate, StyledH2, StyledReadMore, Wrapper } from './archive.styles'

const archive = ({data: {allWpPost}, pageContext: { catId, catName, catUri, numPages, currentPage}}) => {
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
            <ContentWrapper>
               <ArchiveSidebar catId={catId} categories={categories.edges}/>
               <PageContent>
                  <h1 dangerouslySetInnerHTML={{__html: catName}}/>
                  {allWpPost.edges.map(post => (
                     <article key={post.node.id} className='entry-content'>
                        <Link to={`/blog${post.node.uri}`}>
                           <StyledH2
                              dangerouslySetInnerHTML={{__html: post.node.title}}
                           />
                        </Link>
                        <StyledDate
                           dangerouslySetInnerHTML={{__html: post.node.data}}
                        />
                        <p
                           dangerouslySetInnerHTML={{__html: post.node.excerpt}}
                        />
                        <StyledReadMore to={`/blog${post.node.uri}`}>
                           Read More
                        </StyledReadMore>
                        <div className="dot-divider">
                           
                        </div>
                     </article>
                  ))}
                  <Pagination
                     catUri={catUri}
                     page={currentPage}
                     totalPages={numPages}
                  />
               </PageContent>
            </ContentWrapper>
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