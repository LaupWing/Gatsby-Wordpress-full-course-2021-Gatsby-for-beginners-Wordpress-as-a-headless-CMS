const path = require('path')

exports.createPages = async ({graphql, actions, reporter}) =>{
   const { createPage } = actions

   const result = await graphql(`
      {
         wp {
         readingSettings {
            postsPerPage
         }
         }
         allWpCategory {
         edges {
            node {
               id
               name
               count
               uri
               slug
            }
         }
         }
      }
   `)
   console.log(result)

   if(result.errors){
      reporter.panicOnBuild(`Something went wrong`, result.errors)
   }
   const {wp, allWpCategory} = result.data
}

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
