import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../images/logo.svg'
import {useMenuQuery} from '../../hooks/useMenuQuery'
import {Content, Wrapper} from './Header.styles'

const Header = () => {
   const {site} = useMenuQuery()
   console.log(site)
   return (
      <Wrapper>
         <Content>
            <Link to='/'>
               <img src={Logo} alt={site.siteMetadata.title} />
            </Link>
         </Content>
      </Wrapper>
   )
}

export default Header
