import { graphql } from 'gatsby';

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
