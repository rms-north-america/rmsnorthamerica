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
                    totalCount
                }
            }
        `,
    );
    return allContentfulInterface;
};
