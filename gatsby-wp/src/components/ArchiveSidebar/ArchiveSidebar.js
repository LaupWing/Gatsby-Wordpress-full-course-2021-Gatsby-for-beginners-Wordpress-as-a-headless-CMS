import { Link } from 'gatsby'
import React from 'react'
import PageIcon from '../../images/page-icon.svg'
import { Menu, Wrapper } from './ArchiveSidebar.styles'

const ArchiveSidebar = ({catId, categories}) => {
   const sortedCategories = [...categories].sort((x,y)=>{
      if(x.node.slug === 'all-posts')  return -1
      if(y.node.slug === 'all-posts')  return 1
      return 0
   })

   return (
      <Wrapper>
         <Menu>
            <li className="sidebar-menu-header">
               <img src={PageIcon} alt="Cake It! - Archive Header" />
            </li>
            {sortedCategories.map(cat=>{
               if(cat.node.count !== 0){
                  return cat.node.slug !== 'uncategorized' ? (
                     <li key={cat.node.id}>
                        <span className="count">{cat.node.count}</span>
                        <Link
                           to={cat.node.uri}
                           activeClassName='sidebar-highlighted'
                        >
                           <span
                              dangerouslySetInnerHTML={{
                                 __html: cate.node.name
                              }}
                           />
                        </Link>
                     </li>
                  ) : null
               }
               return null
            })}
         </Menu>
      </Wrapper>
   )
}

export default ArchiveSidebar
