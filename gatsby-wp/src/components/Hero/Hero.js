import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useHeroQuery } from '../../hooks/useHeroQuery'
import { HeaderWrapper, StyledImg, Wrapper } from './Hero.styles'

const Hero = () => {
   const {wpPage: {ACF_HomePage: data}} = useHeroQuery()
   const image = getImage(data.heroImage.localFile)
   
   return (
      <Wrapper>
         <StyledImg image={image}/>
         <HeaderWrapper>
            <h1>{data.heroText}</h1>
         </HeaderWrapper>
      </Wrapper>
   )
}

export default Hero