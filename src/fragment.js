import { graphql } from 'gatsby';

export const imageGeneral = graphql`
    fragment imageGeneral on ContentfulAsset {
        fluid(maxWidth: 800, quality: 80) {
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
        fluid(maxWidth: 550, maxHeight: 275, quality: 80) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const imageArchive = graphql`
    fragment imageArchive on ContentfulAsset {
        fluid(maxWidth: 890, maxHeight: 445, quality: 80) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const imageSingle = graphql`
    fragment imageSingle on ContentfulAsset {
        fluid(maxWidth: 1110, maxHeight: 555, quality: 80) {
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
        link {
            slug
        }
    }
`;

export const contentPage = graphql`
    fragment contentPage on ContentfulPage {
        title
        slug
        image {
            ...imageHero
        }
        head {
            childMarkdownRemark {
                html
                excerpt
            }
        }
        body {
            childMarkdownRemark {
                html
                excerpt
            }
        }
        excerpt {
            excerpt
        }
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
        link {
            slug
        }
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
        link {
            slug
        }
        trigger
        video
        scroll
    }
`;

export const contentTestimonial = graphql`
    fragment contentTestimonial on ContentfulTestimonial {
        id
        title
        body {
            childMarkdownRemark {
                html
            }
        }
        company
        order
    }
`;
