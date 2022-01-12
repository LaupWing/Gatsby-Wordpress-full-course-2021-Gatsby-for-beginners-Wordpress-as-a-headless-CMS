const path = require('path')

exports.createPages = async ({graphql, actions, reporter}) =>{
   const { createPage } = actions

   const archive = path.resolve('./src/templates/archive.js')

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

   allWpCategory.edges.forEach(category =>{
      const postPerPage = wp.readingSettings.postsPerPage
      const numberOfPosts = category.node.count
      const numPages = Math.ceil(numberOfPosts / postPerPage)

      if(numberOfPosts > 0 || category.node.name !== 'uncategorized'){
         Array.from({length: numPages}).forEach((_, i)=>{
            createPage({
               path:
                  i === 0 ? category.node.uri : `${category.node.uri}${i+1}`,
               component: archive,
               context:{
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numPages,
                  currentPage: i + 1,
                  catId: category.node.id,
                  catName: category.node.name,
                  catUri: category.node.uri,
                  categories: allWpCategory
               }
            })
         })
      }
   })
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
