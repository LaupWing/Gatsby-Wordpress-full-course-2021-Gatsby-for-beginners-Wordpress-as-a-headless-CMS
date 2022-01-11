import { Link } from 'gatsby'
import React from 'react'
import PageIcon from '../../images/page-icon.svg'
import { Wrapper } from '../BreadCrumb/BreadCrumb.styles'
import SidebarMessage from '../SidebarMessage/SidebarMessage'
import { Menu } from './PageSidebar.styles'

const PageSideBar = ({children, parentChildren, currentPage, parent}) => {

   const getParentContent = () => (
      <>
         <li className='sidebar-menu-header'>
            <img src={PageIcon} alt="CakeIt page" />
            <span dangerouslySetInnerHTML={{__html: currentPage.title}}/>
         </li>
         {children.nodes.map(child=>(
            <li key={child.id}>
               <Link to={child.uri}>
                  <span dangerouslySetInnerHTML={{__html:child.title}}/>
               </Link>
            </li>
         ))}
      </>
   )

   const getChildContent = () =>(
      <>
         <li className='sidebar-menu-header'>
            <img src={PageIcon} alt="CakeIt Page" />
            <span
               dangerouslySetInnerHTML={{__html: parent}}
            />
         </li>
         {parentChildren.map(child=>(
            <li key={child.id}>
               <Link to={child.uri} activeClassName='sidebar-highlighted'>
                  <span dangerouslySetInnerHTML={{__html: child.title}}/>
               </Link>
            </li>
         ))}
      </>
   )

   return (
      <Wrapper>
         {children.nodes.length === 0 && !parent ? (
            <SidebarMessage/>
         ) :(
            <Menu>
               {parent ? getChildContent() : getParentContent()}
            </Menu>
         )}
      </Wrapper>
   )
}

export default PageSideBar
