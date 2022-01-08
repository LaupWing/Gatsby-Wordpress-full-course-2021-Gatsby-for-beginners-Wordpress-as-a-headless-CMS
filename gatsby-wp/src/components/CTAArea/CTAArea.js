import React from 'react'
import { useCTAAreaQuery } from '../../hooks/useCtAAreaQuery'
import { Wrapper } from './CTAArea.styles'

const CTAArea = () => {
   const {wpPage} = useCTAAreaQuery()
   console.log(wpPage)

   return (
      <Wrapper>
         
      </Wrapper>
   )
}

export default CTAArea
