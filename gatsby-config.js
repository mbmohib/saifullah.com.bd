module.exports = {
  siteMetadata: {
    title: "saifullah.com.bd",
    description: `Abdul Hi Muhammad Saifullah, Religious Consultant at E.B solutions Limited & Khatib at Masjidul Jumawa Complex`,
    author: `monkef.com`,
    siteUrl: "https://saifullah.com.bd"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    }
  ]
};
