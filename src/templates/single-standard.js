import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { standard } = data;
    return (
        <Layout
            template={`single single-standard single-standard-${standard.slug}`}
            title={standard.title}
            description={logicDescription(standard)}
            location={location}
        >
            {standard.head && (
                <Hero
                    id={`hero-${standard.slug}`}
                    height="short"
                    opacity={style.HERO_OPACITY}
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    source={standard.image.fluid}
                    alternate={standard.title}
                >
                    <header dangerouslySetInnerHTML={{ __html: standard.head.childMarkdownRemark.html }} />
                </Hero>
            )}
            {standard.body && (
                <Basic id={`basic-${standard.slug}`} space="space-xs-50 space-lg-80">
                    <section dangerouslySetInnerHTML={{ __html: standard.body.childMarkdownRemark.html }} />
                </Basic>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query standardBySlug($slug: String!) {
        standard: contentfulStandard(slug: { eq: $slug }) {
            title
            slug
            image {
                ...imageHero
            }
            head {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            excerpt {
                excerpt
            }
        }
    }
`;
