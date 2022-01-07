import { useStaticQuery, graphql } from 'gatsby'

export const useMenuQuery = () => {
   const data = useStaticQuery(graphql`
      query MyQuery {
         site {
         siteMetadata {
            title
         }
         }
         wpMenu(name: {eq: "mainMenu"}) {
         menuItems {
            nodes {
               label
               url
               parentId
               id
               childItems {
               nodes {
                  label
                  url
                  id
               }
               }
            }
         }
         }
      }    
   `)
}