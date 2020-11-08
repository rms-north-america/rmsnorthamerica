import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const { contentfulGeneral } = useStaticQuery (
        graphql`
            query {
                contentfulGeneral(slug: {eq: "jointeam"}) {
                    title
                    slug
                    image {
                        ...imageHero
                    }
                    body {
                        childMarkdownRemark {
                            html
                        }
                    }
                    action
                }
            }
        `
    )
    return contentfulGeneral
}