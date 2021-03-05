module.exports = {
  siteMetadata: {
    title: "Abdul Hi Muhammad Saifullah",
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
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts-with-attributes`,
    //   options: {
    //     fonts: [`Source Sans Pro\:400,600,700`],
    //     display: "swap",
    //     attributes: {
    //       rel: "stylesheet preload",
    //       onLoad: "this.onload=null;this.rel='stylesheet'",
    //       as: "style"
    //     }
    //   }
    // }
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
            variants: [`400`, `600`, `700`]
          }
        ]
      }
    }
  ]
};
