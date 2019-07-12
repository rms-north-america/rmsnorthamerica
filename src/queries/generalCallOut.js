import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { contentfulGeneral } = useStaticQuery(
        graphql`
            query {
                contentfulGeneral(slug: { eq: "call-out" }) {
                    ...contentGeneral
                }
            }
        `,
    );
    return contentfulGeneral;
};
