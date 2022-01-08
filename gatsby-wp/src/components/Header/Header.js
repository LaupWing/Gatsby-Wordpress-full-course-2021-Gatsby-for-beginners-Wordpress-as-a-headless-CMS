import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../images/logo.svg'
import {useMenuQuery} from '../../hooks/useMenuQuery'
import {Content, Wrapper} from './Header.styles'
import Navigation from '../Navigation/Navigation'

const Header = () => {
   const {site, wpMenu} = useMenuQuery()
   
   return (
      <Wrapper>
         <Content>
            <Link to='/'>
               <img src={Logo} alt={site.siteMetadata.title} />
            </Link>
            <Navigation menu={wpMenu.menuItems.nodes}/>
         </Content>
      </Wrapper>
   )
}

export default Header
