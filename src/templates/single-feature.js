import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import Modal from '../components/widget/Modal';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { feature } = data;
    return (
        <Layout template="single single-feature" title={feature.title} description={logicDescription(feature)} location={location}>
            <Hero
                id={`hero-${feature.slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={feature.image.fluid}
                alternate={feature.title}
            >
                {feature.head ? (
                    <header
                        className="node-xs-30 node-lg-50 text-center"
                        dangerouslySetInnerHTML={{ __html: feature.head.childMarkdownRemark.html }}
                    />
                ) : (
                    <header className="node-xs-30 node-lg-50 text-center">
                        <h1>{feature.title}</h1>
                        <h2>{logicDescription(feature)}</h2>
                    </header>
                )}
                {feature.video && (
                    <footer className="node-xs-30 node-lg-50 d-flex justify-content-center">
                        <Modal kind="link" size="xl" icon="play" label={feature.trigger || undefined} video={feature.video} />
                    </footer>
                )}
            </Hero>
            {feature.body && (
                <Basic id={`basic-${feature.slug}`} space="space-xs-80 space-md-130 space-xl-210">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl">
                            {feature.figure ? (
                                <Img className="cheat-left" fluid={feature.figure.fluid} alt={feature.title} />
                            ) : (
                                <figure className="cheat-left height-match">
                                    <Img className="fit exact-center" fluid={feature.image.fluid} alt={feature.title} />
                                </figure>
                            )}
                        </div>
                        <div className="col-xl">
                            <header className="copy" dangerouslySetInnerHTML={{ __html: feature.body.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </Basic>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query featureBySlug($slug: String!) {
        feature: contentfulFeature(slug: { eq: $slug }) {
            title
            slug
            image {
                ...imageHigh
            }
            head {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            trigger
            video
            figure {
                ...imageHigh
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
