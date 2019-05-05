require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Ghost',
        description: 'a Gatsby + Contentful + Netlify starter',
        author: 'Jonathan Howland',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Ghost',
                short_name: 'Ghost',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#222222',
                display: 'standalone',
                icon: 'src/images/icon.png',
                crossOrigin: 'use-credentials',
            },
        },
        'gatsby-plugin-offline',
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
