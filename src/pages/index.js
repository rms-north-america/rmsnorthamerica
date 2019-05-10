import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/section/Hero';
import ButtonMain from '../components/project/ButtonMain';

export default ({ location, data }) => {
    const { splash } = data;
    return (
        <Layout template="home" location={location}>
            {splash && (
                <Hero
                    opacity="opacity-30"
                    tint="dark-50"
                    id={splash.slug}
                    height={splash.height}
                    source={splash.image.fluid}
                    alternate={splash.title}
                    scroll={splash.scroll}
                    color={3}
                >
                    <div className="row">
                        <div className="col-lg-8">
                            <header className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: splash.body.childMarkdownRemark.html }} />
                            <section className="node-xs-30 node-lg-50">
                                <ButtonMain size="xl" label={splash.action} />
                            </section>
                        </div>
                    </div>
                </Hero>
            )}
        </Layout>
    );
};

export const query = graphql`
    query pageHome {
        splash: contentfulHero(slug: { eq: "splash" }) {
            ...contentSplash
        }
    }
`;
