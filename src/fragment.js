import { graphql } from 'gatsby';

export const imageHero = graphql`
    fragment imageHero on ContentfulAsset {
        fluid(maxWidth: 1680, maxHeight: 550, quality: 80, cropFocus: CENTER) {
            ...GatsbyContentfulFluid
        }
    }
`;

export const contentGeneral = graphql`
    fragment contentGeneral on ContentfulGeneral {
        id
        title
        slug
        body {
            childMarkdownRemark {
                html
            }
        }
    }
`;
