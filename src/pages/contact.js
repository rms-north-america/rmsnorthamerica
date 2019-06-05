import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';

export default ({ location, data }) => {
    const { page } = data;
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page.head && (
                <Hero
                    id={`hero-${page.slug}`}
                    height="short"
                    opacity={style.HERO_OPACITY}
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    source={page.image.fluid}
                    alternate={page.title}
                >
                    <header dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }} />
                </Hero>
            )}
            {page.body && (
                <Basic id={`basic-${page.slug}`} space="space-xs-50 space-lg-80">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-lg-9">
                            <section dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </Basic>
            )}
        </Layout>
    );
};

export const query = graphql`
    query pageContact {
        page: contentfulPage(slug: { eq: "contact" }) {
            ...contentPage
        }
    }
`;
