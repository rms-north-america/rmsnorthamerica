import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { allContentfulInterface } = useStaticQuery(
        graphql`
            query {
                allContentfulInterface {
                    group(field: type) {
                        fieldValue
                        totalCount
                    }
                }
            }
        `,
    );
    return allContentfulInterface.group;
};
