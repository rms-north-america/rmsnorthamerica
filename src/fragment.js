import { graphql } from 'gatsby';

export const imageGeneral = graphql`
    fragment imageGeneral on ContentfulAsset {
        fluid(quality: 80) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const imageSplash = graphql`
    fragment imageSplash on ContentfulAsset {
        fluid(maxWidth: 1680, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const imageHero = graphql`
    fragment imageHero on ContentfulAsset {
        fluid(maxWidth: 1680, maxHeight: 550, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const imageFeed = graphql`
    fragment imageFeed on ContentfulAsset {
        fluid(maxWidth: 550, maxHeight: 340, quality: 80) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const contentGeneral = graphql`
    fragment contentGeneral on ContentfulGeneral {
        id
        title
        slug
        image {
            ...imageGeneral
        }
        body {
            childMarkdownRemark {
                html
            }
        }
        action
    }
`;

export const contentSplash = graphql`
    fragment contentSplash on ContentfulHero {
        id
        title
        slug
        height
        image {
            ...imageSplash
        }
        body {
            childMarkdownRemark {
                html
            }
        }
        action
        trigger
        video
        scroll
    }
`;

export const contentHero = graphql`
    fragment contentHero on ContentfulHero {
        id
        title
        slug
        height
        image {
            ...imageHero
        }
        body {
            childMarkdownRemark {
                html
            }
        }
        action
        trigger
        video
        scroll
    }
`;
