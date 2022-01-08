import { Link } from 'gatsby'
import React from  'react'
import { CTAImage, CTAImageText, CTAImageTextWrapper, StyledImg } from './CTA.styles'

const CTA = ({image, link, text}) => {
   return (
      <CTAImage>
         <StyledImg
            image={image}
            alt="CTA Image"
         />
         <Link to={link}>
            <CTAImageTextWrapper>
               <CTAImageText>
                  {text}
               </CTAImageText>
            </CTAImageTextWrapper>
         </Link>
      </CTAImage>
   )
}

export default CTA