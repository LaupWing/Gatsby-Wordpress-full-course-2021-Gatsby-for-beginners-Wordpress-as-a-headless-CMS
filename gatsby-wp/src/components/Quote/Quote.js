import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import { Content, Wrapper } from "./Quote.styles"
import QuoteImg from '../../images/quote.svg'
import React from 'react'

const Quote = () => {
   const data = useQuoteQuery()

   return (
      <Wrapper>
         <Content>
            <img src={QuoteImg}/>
            <h6>{data.wpPage.ACF_HomePage.citat1Text}</h6>
            <p>{data.wpPage.ACF_HomePage.citat1Author}</p>
         </Content>
      </Wrapper>
   )
}

export default Quote
