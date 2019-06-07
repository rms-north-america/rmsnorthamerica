import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import Modal from '../components/widget/Modal';
import CarouselTestimonial from '../components/project/CarouselTestimonial';
import GeneralRequestDemo from '../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { industry } = data;
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
                <footer className="node-xs-30 node-lg-50 d-flex justify-content-center">
                    <Modal kind="link" size="xl" icon="play" label={industry.trigger || undefined} video={industry.video} />
                </footer>
            </Hero>
            {industry.body && (
                <Basic id={`basic-${industry.slug}`} space="space-xs-80 space-md-130 space-xl-210">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl">
                            {industry.figure ? (
                                <Img className="cheat-left" fluid={industry.figure.fluid} alt={industry.title} />
                            ) : (
                                <figure className="cheat-left">
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
            testimonial {
                ...contentTestimonial
            }
        }
    }
`;
