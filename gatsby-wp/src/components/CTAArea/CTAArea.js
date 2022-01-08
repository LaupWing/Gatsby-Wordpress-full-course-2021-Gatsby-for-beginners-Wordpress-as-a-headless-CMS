import React from 'react'
import { useCTAAreaQuery } from '../../hooks/useCtAAreaQuery'
import CTA from '../CTA/CTA'
import { Wrapper } from './CTAArea.styles'

const CTAArea = () => {
   const {wpPage} = useCTAAreaQuery()
   
   console.log(wpPage)
   return (
      <Wrapper>
         {new Array(3).fill("").map((_, i)=>(
            <CTA
               key={i}
               image={
                  wpPage.ACF_HomePage[`cta${i+1}Image`].localFile.childImageSharp.gatsbyImageData
               }
               link={wpPage.ACF_HomePage[`cta${i+1}Link`]}
               text={wpPage.ACF_HomePage[`cta${i+1}Text`]}
            />
         ))}
      </Wrapper>
   )
}

export default CTAArea
