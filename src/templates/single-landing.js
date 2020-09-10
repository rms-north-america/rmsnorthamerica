import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Feed from '../components/section/Feed';
import Hero from '../components/section/Hero';
import ArticleFeature from '../components/project/ArticleFeature';
import CarouselTestimonial from '../components/project/CarouselTestimonial';
import GeneralCallOut from '../components/project/GeneralCallOut';
import ModalForm from '../components/project/ModalForm';

export default ({ location, data }) => {
    const { landing } = data;
    if (!landing.feature) {
        landing.feature = [];
    }
    const loopFeature = landing.feature.map((feature) => <ArticleFeature key={feature.id} feature={feature} landing />);
    return (
        <Layout
            template={`single single-landing single-landing-${landing.slug}`}
            title={landing.title}
            description={logicDescription(landing)}
            location={location}
            landing
        >
            <Hero
                id={`hero-${landing.slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={(landing.cover && landing.cover.fluid) || landing.image.fluid}
                alternate={landing.title}
            >
                <div className="row">
                    <div className="col-lg-8">
                        {landing.head ? (
                            <header className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: landing.head.childMarkdownRemark.html }} />
                        ) : (
                            <header className="node-xs-30 node-lg-50">
                                <h1>{landing.title}</h1>
                                <h2>{logicDescription(landing)}</h2>
                            </header>
                        )}
                        {landing.form && (
                            <footer className="node-xs-30 node-lg-50 d-flex">
                                <ModalForm
                                    kind="main"
                                    size="xl"
                                    to="form"
                                    label={landing.trigger || undefined}
                                    modal={landing.modal}
                                    form={landing.form}
                                />
                            </footer>
                        )}
                    </div>
                </div>
            </Hero>
            {loopFeature.length > 0 && (
                <Feed id="client" space="space-xs-50 space-lg-80" color={5}>
                    <div className="row justify-content-center gutter-50 gutter-lg-80">{loopFeature}</div>
                </Feed>
            )}
            {landing.body && (
                <Basic id={`basic-${landing.slug}`} space="space-xs-80 space-md-130 space-xl-210">
                    {landing.introduction && (
                        <header
                            className="copy node-xs-80 node-lg-130 text-lg-center"
                            dangerouslySetInnerHTML={{ __html: landing.introduction.childMarkdownRemark.html }}
                        />
                    )}
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-xl">
                                {landing.figure ? (
                                    <Img className="cheat-left" fluid={landing.figure.fluid} alt={landing.title} />
                                ) : (
                                    <figure className="cheat-left height-match">
                                        <Img className="fit exact-center" fluid={landing.image.fluid} alt={landing.title} />
                                    </figure>
                                )}
                            </div>
                            <div className="col-xl">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: landing.body.childMarkdownRemark.html }} />
                            </div>
                        </div>
                    </section>
                </Basic>
            )}
            {landing.additional && (
                <Basic id="basic-additional" space="space-xs-80 space-md-130 space-xl-210">
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-xl">
                                <header
                                    className="copy node-xs-30 node-lg-50"
                                    dangerouslySetInnerHTML={{ __html: landing.additional.childMarkdownRemark.html }}
                                />
                                {landing.form && (
                                    <footer className="node-xs-30 node-lg-50 d-flex">
                                        <ModalForm
                                            kind="main"
                                            size="xl"
                                            to="form"
                                            label={landing.trigger || undefined}
                                            modal={landing.modal}
                                            form={landing.form}
                                        />
                                    </footer>
                                )}
                            </div>
                            <div className="col-xl">
                                {landing.picture ? (
                                    <Img className="cheat-right" fluid={landing.picture.fluid} alt={landing.title} />
                                ) : (
                                    <figure className="cheat-right height-match">
                                        <Img className="fit exact-center" fluid={landing.image.fluid} alt={landing.title} />
                                    </figure>
                                )}
                            </div>
                        </div>
                    </section>
                </Basic>
            )}
            {landing.testimonial.length > 0 && (
                <CarouselTestimonial id="testimonial" fade={true} controls={false} indicators={false} slides={landing.testimonial} />
            )}
            <GeneralCallOut style={style} landing={landing} />
        </Layout>
    );
};

export const query = graphql`
    query landingBySlug($slug: String!) {
        landing: contentfulLanding(slug: { eq: $slug }) {
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
            feature {
                ...contentFeature
            }
            introduction {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            figure {
                ...imageFigure
            }
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            picture {
                ...imageFigure
            }
            additional {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            testimonial {
                ...contentTestimonial
            }
            trigger
            modal
            form {
                form
            }
        }
    }
`;
