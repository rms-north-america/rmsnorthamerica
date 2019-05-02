import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { contentfulAsset } = useStaticQuery(
        graphql`
            query {
                contentfulAsset(title: { eq: "logo" }) {
                    file {
                        url
                    }
                }
            }
        `,
    );
    return contentfulAsset.file.url;
};
