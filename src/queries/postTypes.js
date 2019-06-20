import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { allContentfulPost } = useStaticQuery(
        graphql`
            query {
                allContentfulPost {
                    group(field: type) {
                        fieldValue
                        totalCount
                    }
                }
            }
        `,
    );
    return allContentfulPost.group;
};
