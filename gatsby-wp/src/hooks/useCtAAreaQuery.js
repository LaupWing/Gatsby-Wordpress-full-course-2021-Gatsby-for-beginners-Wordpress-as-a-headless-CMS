import { graphql, useStaticQuery } from "gatsby"


export const useCTAAreaQuery = () =>{
   const data = useStaticQuery(graphql`
      fragment ctaImage on WpMediaItem {
         localFile {
            childImageSharp {
               gatsbyImageData(width: 720, placeholder: BLURRED)
            }
         }
      }
      query CTAQuery {
         wpPage(databaseId: {eq: 47}) {
            ACF_HomePage {
               cta1Link
               cta1Text
               cta2Link
               cta2Text
               cta3Link
               cta3Text
               cta3Image {
                  ...ctaImage
               }
               cta1Image {
                  ...ctaImage
               }
               cta2Image {
                  ...ctaImage
               }
            }
         }
      }
   `)
   return data
}