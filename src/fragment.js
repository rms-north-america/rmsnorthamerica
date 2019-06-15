import { graphql } from 'gatsby';

export const imageGeneral = graphql`
    fragment imageGeneral on ContentfulAsset {
        fluid(maxWidth: 800, quality: 80) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageSquare = graphql`
    fragment imageSquare on ContentfulAsset {
        fluid(maxWidth: 340, maxHeight: 340, quality: 100, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageMaximum = graphql`
    fragment imageMaximum on ContentfulAsset {
        fluid(maxWidth: 1680, quality: 100, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageHigh = graphql`
    fragment imageHigh on ContentfulAsset {
        fluid(maxWidth: 1680, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageHero = graphql`
    fragment imageHero on ContentfulAsset {
        fluid(maxWidth: 1680, maxHeight: 550, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageFeed = graphql`
    fragment imageFeed on ContentfulAsset {
        fluid(maxWidth: 550, maxHeight: 275, quality: 80) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageArchive = graphql`
    fragment imageArchive on ContentfulAsset {
        fluid(maxWidth: 890, maxHeight: 445, quality: 80) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageSingle = graphql`
    fragment imageSingle on ContentfulAsset {
        fluid(maxWidth: 1110, maxHeight: 555, quality: 80) {
            ...GatsbyContentfulFluid_withWebp
        }
    }
`;

export const imageFigure = graphql`
    fragment imageFigure on ContentfulAsset {
        fluid(maxWidth: 1680, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid_withWebp_noBase64
        }
    }
`;

export const imageIcon = graphql`
    fragment imageIcon on ContentfulAsset {
        fixed(width: 145, height: 146, quality: 100, cropFocus: CENTER) {
            ...GatsbyContentfulFixed_withWebp_noBase64
        }
    }
`;

export const contentGeneral = graphql`
    fragment contentGeneral on ContentfulGeneral {
        id
        title
        slug
        image {
            ...imageHigh
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

export const contentFigure = graphql`
    fragment contentFigure on ContentfulGeneral {
        id
        title
        slug
        image {
            ...imageFigure
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
            ...imageHigh
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

export const contentPoint = graphql`
    fragment contentPoint on ContentfulPoint {
        id
        title
        slug
        image {
            ...imageIcon
        }
        body {
            childMarkdownRemark {
                html
            }
        }
        order
    }
`;

export const contentFeature = graphql`
    fragment contentFeature on ContentfulFeature {
        id
        title
        slug
        image {
            ...imageIcon
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
        order
    }
`;

export const contentIndustry = graphql`
    fragment contentIndustry on ContentfulIndustry {
        id
        title
        slug
        image {
            ...imageFeed
        }
        body {
            childMarkdownRemark {
                excerpt
            }
        }
        excerpt {
            excerpt
        }
        action
        order
    }
`;

export const contentPerson = graphql`
    fragment contentPerson on ContentfulPerson {
        id
        title
        slug
        image {
            ...imageSquare
        }
        position
        order
    }
`;

export const contentTestimonial = graphql`
    fragment contentTestimonial on ContentfulTestimonial {
        id
        title
        slug
        body {
            childMarkdownRemark {
                html
            }
        }
        company
        order
    }
`;
