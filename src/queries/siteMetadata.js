import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );
    return site.siteMetadata;
};
