import React from 'react'
import {Link} from 'gatsby'
import {NavigationWrapper} from './Navigation.styles'

const Navigation = ({menu}) => {
   return (
      <NavigationWrapper>
         <ul>
            {menu.map(mainItem=>
               !mainItem.parentId ? (
                  <li key={mainItem.id}>
                     <Link to={mainItem.url} activeClassName='nav-active'>
                        {mainItem.label}
                        {mainItem.child.nodes.length !== 0 && <div>&#8964;</div>}
                     </Link>
                  </li>
               ) : null
            )}
         </ul>
      </NavigationWrapper>
   )
}

export default Navigation
