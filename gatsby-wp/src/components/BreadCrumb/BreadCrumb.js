import { Link } from 'gatsby'
import React from 'react'
import { Wrapper } from './BreadCrumb.styles'


const BreadCrumb = ({parent}) => {
   return (
      <Wrapper>
         <Link to='/'>
            <span>Home</span>
         </Link>
         <span className="divider">/</span>
         {parent ? (
            <>
               <Link to={parent.uri}>
                  <span dangerouslySetInnerHTML={{__html: parent.title}}/>
               </Link>
               <span className="divider">/</span>
            </>
         ) : null}
      </Wrapper>
   )
}

export default BreadCrumb