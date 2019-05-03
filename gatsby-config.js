require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Ghost',
        description: 'a Gatsby + Contentful + Netlify starter',
        author: 'Jonathan Howland',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
    ],
};
