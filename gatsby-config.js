require('dotenv').config();

module.exports = {
    siteMetadata: {
        siteUrl: 'https://sleepy-pasteur-0771b3.netlify.com/',
        title: 'RMS',
        description: 'A fully integrated Cloud Based Property Management System',
        author: 'RMS',
    },
    plugins: [
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'RMS',
                short_name: 'RMS',
                start_url: '/',
                background_color: '#006c8c',
                theme_color: '#006c8c',
                display: 'standalone',
                icon: 'src/images/icon.png',
                crossOrigin: 'use-credentials',
            },
        },
        'gatsby-plugin-netlify',
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images-contentful',
                        options: {
                            maxWidth: 1110,
                        },
                    },
                    'gatsby-remark-responsive-iframe',
                ],
            },
        },
        'gatsby-transformer-sharp',
    ],
};
