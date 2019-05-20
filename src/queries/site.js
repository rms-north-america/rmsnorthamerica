import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { contentfulSite } = useStaticQuery(
        graphql`
            query {
                contentfulSite(slug: { eq: "information" }) {
                    name
                    description
                }
            }
        `,
    );
    return contentfulSite;
};
