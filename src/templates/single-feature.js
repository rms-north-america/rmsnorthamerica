import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { logicDescription } from '../logic';
import * as path from '../path';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Feed from '../components/section/Feed';
import Hero from '../components/section/Hero';
import Modal from '../components/widget/Modal';
import Button from '../components/unit/Button';
import ArticleFeature from '../components/project/ArticleFeature';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { features, feature } = data;
    const loopFeature = features.edges.map(({ node: feature }) => <ArticleFeature key={feature.id} feature={feature} />);
    return (
        <Layout
            template={`single single-feature single-feature-${feature.slug}`}
            title={feature.title}
            description={logicDescription(feature)}
            location={location}
        >
            <Hero
                id={`hero-${feature.slug}`}
                height="short"
                opacity={style.HERO_OPACITY}
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={(feature.cover && feature.cover.fluid) || feature.image.fluid}
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
            {false && (
                <Feed id="feed-feature" space="space-xs-80 space-md-130 space-xl-210" item="feature">
                    <header className="copy node-xs-50 node-lg-80 text-lg-center">
                        <h3>Related Features</h3>
                    </header>
                    <section className="node-xs-50 node-lg-80">
                        <div className="row gutter-50 gutter-lg-80">{loopFeature}</div>
                    </section>
                    <footer className="node-xs-50 node-lg-80 text-lg-center">
                        <Button label="View all features" to={path.PRODUCT_FEATURES} />
                    </footer>
                </Feed>
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query featureBySlug($slug: String!) {
        features: allContentfulFeature(filter: { feature: { elemMatch: { slug: { eq: $slug } } } }, sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentFeature
                }
            }
        }
        feature: contentfulFeature(slug: { eq: $slug }) {
            title
            slug
            image {
                ...imageHigh
            }
            cover {
                ...imageHigh
            }
            head {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
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
