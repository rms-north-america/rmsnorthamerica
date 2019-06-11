import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { includeByProperty } from '../filter';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Feed from '../components/section/Feed';
import Hero from '../components/section/Hero';
import Modal from '../components/widget/Modal';
import ArticleFeature from '../components/project/ArticleFeature';
import CarouselTestimonial from '../components/project/CarouselTestimonial';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { industry } = data;
    const featureKey = industry.feature && includeByProperty(industry.feature, 'type', 'key');
    const featureOptional = industry.feature && includeByProperty(industry.feature, 'type', 'optional');
    const loopFeatureKey = featureKey && featureKey.map((feature) => <ArticleFeature key={feature.id} feature={feature} />);
    const loopFeatureOptional = featureOptional && featureOptional.map((feature) => <ArticleFeature key={feature.id} feature={feature} />);
    return (
        <Layout template="single single-industry" title={industry.title} description={logicDescription(industry)} location={location}>
            <Hero
                id={`hero-${industry.slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={industry.image.fluid}
                alternate={industry.title}
            >
                {industry.head ? (
                    <header
                        className="node-xs-30 node-lg-50 text-center"
                        dangerouslySetInnerHTML={{ __html: industry.head.childMarkdownRemark.html }}
                    />
                ) : (
                    <header className="node-xs-30 node-lg-50 text-center">
                        <h1>{industry.title}</h1>
                        <h2>{logicDescription(industry)}</h2>
                    </header>
                )}
                {industry.video && (
                    <footer className="node-xs-30 node-lg-50 d-flex justify-content-center">
                        <Modal kind="link" size="xl" icon="play" label={industry.trigger || undefined} video={industry.video} />
                    </footer>
                )}
            </Hero>
            {industry.body && (
                <Basic id={`basic-${industry.slug}`} space="space-xs-80 space-md-130 space-xl-210">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl">
                            {industry.figure ? (
                                <Img className="cheat-left" fluid={industry.figure.fluid} alt={industry.title} />
                            ) : (
                                <figure className="cheat-left height-match">
                                    <Img className="fit exact-center" fluid={industry.image.fluid} alt={industry.title} />
                                </figure>
                            )}
                        </div>
                        <div className="col-xl">
                            <header className="copy" dangerouslySetInnerHTML={{ __html: industry.body.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </Basic>
            )}
            {industry.feature && loopFeatureKey.length > 0 && (
                <Feed id="feed-feature-key" space="space-xs-80 space-md-130 space-xl-210" item="feature">
                    <header className="copy node-xs-50 node-lg-80 text-lg-center">
                        <h3>Key Features</h3>
                    </header>
                    <section className="node-xs-50 node-lg-80">
                        <div className="row gutter-50 gutter-lg-80">{loopFeatureKey}</div>
                    </section>
                </Feed>
            )}
            {industry.feature && loopFeatureOptional.length > 0 && (
                <Feed id="feed-feature-optional" space="space-xs-80 space-md-130 space-xl-210" item="feature">
                    <header className="copy node-xs-50 node-lg-80 text-lg-center">
                        <h3>Additional Options</h3>
                    </header>
                    <section className="node-xs-50 node-lg-80">
                        <div className="row gutter-50 gutter-lg-80">{loopFeatureOptional}</div>
                    </section>
                </Feed>
            )}
            {industry.testimonial && (
                <CarouselTestimonial id="testimonial" fade={true} controls={false} indicators={false} slides={industry.testimonial} />
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query industryBySlug($slug: String!) {
        industry: contentfulIndustry(slug: { eq: $slug }) {
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
            feature {
                ...contentFeature
            }
            testimonial {
                ...contentTestimonial
            }
        }
    }
`;
