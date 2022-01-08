import React from 'react'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import { Overlay } from './OverlayMenu.styles'
import InvertedLogo from '../../images/logo-inverted.svg'
import CloseBtn from '../../images/close_btn.svg'
import { Link } from 'gatsby'

const OverlayMenu = ({menuOpen, callback}) => {
   const {menu} = useMenuQuery()

   return (
      <Overlay menuOpen={menuOpen}>
         <div className="inner">
            <img src={InvertedLogo} alt="white-logo" />
            <ul className='overlayMenu'>
               {menu.menuItems.nodes.map(item=>(
                  !item.parentId ? (
                     <li key={item.id}>
                        <Link to={item.url} activeClassName='overlayActive'>
                           {item.label}
                        </Link>
                     </li>
                  ) : null
               ))}
            </ul>
            <div 
               className='closeButton'
               onClick={callback}
               role="button"
               tabIndex="0"
            >
               <img src={CloseBtn} alt="Close" />
            </div>
         </div>
      </Overlay>
   )
}

export default OverlayMenu
