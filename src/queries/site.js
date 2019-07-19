import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const { contentfulSite } = useStaticQuery(
        graphql`
            query {
                contentfulSite(slug: { eq: "information" }) {
                    name
                    description
                    action
                    link {
                        slug
                    }
                    contact {
                        childMarkdownRemark {
                            html
                        }
                    }
                    legal {
                        childMarkdownRemark {
                            html
                        }
                    }
                    about {
                        childMarkdownRemark {
                            html
                        }
                    }
                    extra {
                        childMarkdownRemark {
                            html
                        }
                    }
                    script {
                        script
                    }
                }
            }
        `,
    );
    return contentfulSite;
};
