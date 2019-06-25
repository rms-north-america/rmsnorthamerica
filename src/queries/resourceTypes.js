import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { allContentfulResource } = useStaticQuery(
        graphql`
            query {
                allContentfulResource {
                    group(field: type) {
                        fieldValue
                        totalCount
                    }
                    totalCount
                }
            }
        `,
    );
    return allContentfulResource;
};
