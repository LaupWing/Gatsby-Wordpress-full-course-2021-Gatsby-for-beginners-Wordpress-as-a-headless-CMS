import { Link } from 'gatsby'
import React from 'react'
import { Menu, Wrapper } from './PostSidebar.styles'

const PostSidebar = ({date, author, categories}) => {
   return (
      <Wrapper>
         <Menu>
            <li className="sidebar-section">
               <span>{date}</span>
            </li>
            <li className="sidebar-section">
               <span>{author}</span>
            </li>
            <li className="sidebar-section">
               <span>categories</span>
            </li>
            {categories.map(cat=>(
               cat.slug !== 'all-posts' ? (
                  <li key={cat.id}>
                     <Link to={cat.uri}>
                        <span
                           dangerouslySetInnerHTML={{__html: cat.name}}
                        />
                     </Link>
                  </li>
               ): null
            ))}
         </Menu>
      </Wrapper>
   )
}

export default PostSidebar
