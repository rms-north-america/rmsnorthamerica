import React from 'react';
import { graphql } from 'gatsby';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { page, hero } = data;
    const description = page.excerpt ? page.excerpt.excerpt : page.body.childMarkdownRemark.excerpt.replace(/\n/g, ' ');
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={description} location={location}>
            {hero && (
                <Hero
                    opacity={style.HERO_OPACITY}
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    id={`hero-${hero.slug}`}
                    height={hero.height}
                    source={hero.image.fluid}
                    alternate={hero.title}
                    scroll={hero.scroll}
                >
                    <header dangerouslySetInnerHTML={{ __html: hero.body.childMarkdownRemark.html }} />
                </Hero>
            )}
            {page && (
                <Basic id={`basic-${page.slug}`} space="space-xs-50 space-lg-80">
                    <section dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
                </Basic>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query pageAbout {
        page: contentfulPage(slug: { eq: "about" }) {
            title
            slug
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
        hero: contentfulHero(slug: { eq: "about" }) {
            ...contentHero
        }
    }
`;
