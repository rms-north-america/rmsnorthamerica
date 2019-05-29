import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as path from '../path';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Hero from '../components/section/Hero';
import Feed from '../components/section/Feed';
import Modal from '../components/widget/Modal';
import Button from '../components/unit/Button';
import CarouselTestimonial from '../components/project/CarouselTestimonial';

export default ({ location, data }) => {
    const { points, industries, testimonials, splash, introduction, product, industry, contact } = data;
    const loopPoint = points.edges.map(({ node }) => (
        <article key={node.id} id={`point-${node.slug}`} className={`point point-${node.order} col-lg-4`}>
            <header className="copy" dangerouslySetInnerHTML={{ __html: node.body.childMarkdownRemark.html }} />
        </article>
    ));
    const loopIndustry = industries.edges.map(({ node }) => (
        <article key={node.id} id={`industry-${node.slug}`} className={`industry industry-${node.order} effect-image col-lg-3`}>
            <figure className="effect-oscar">
                <Img className="image fit" fluid={node.image.fluid} alt={node.title} />
                <figcaption className="dark-30 d-flex align-items-center">
                    <h4 className="headline">{node.title}</h4>
                    <div className="caption">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: node.excerpt ? node.excerpt.excerpt : node.body.childMarkdownRemark.excerpt,
                            }}
                        />
                        <p>{`${node.action || 'Learn more'} →`}</p>
                    </div>
                    <Link className="link" to={`${path.INDUSTRY}/${node.slug}`}>
                        view more
                    </Link>
                </figcaption>
            </figure>
        </article>
    ));
    return (
        <Layout template="home" location={location}>
            {splash && (
                <Hero
                    opacity={style.HERO_OPACITY}
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    id={splash.slug}
                    height={splash.height}
                    source={splash.image.fluid}
                    alternate={splash.title}
                    scroll={splash.scroll}
                >
                    <div className="row">
                        <div className="col-lg-8">
                            <header className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: splash.body.childMarkdownRemark.html }} />
                            <footer className="node-xs-30 node-lg-50 d-flex">
                                <Button kind="main" size="xl" label={splash.action} to={`/${splash.link.slug}`} />
                                <Modal kind="link" size="xl" icon="play" label={splash.trigger} video={splash.video} />
                            </footer>
                        </div>
                    </div>
                </Hero>
            )}
            {introduction && (
                <Basic id={introduction.slug} space="space-xs-50 space-lg-80" color={5}>
                    <div className="row align-items-center gutter-50 gutter-lg-80">
                        <div className="col-2 d-none d-md-block">
                            <Img fluid={introduction.image.fluid} alt={introduction.title} />
                        </div>
                        <div className="col">
                            <header className="copy attention" dangerouslySetInnerHTML={{ __html: introduction.body.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </Basic>
            )}
            {points.edges.length > 0 && (
                <Feed id="point" space="space-xs-80 space-md-130 space-xl-210" item="point">
                    <section>
                        <div className="row gutter-50 gutter-lg-80">{loopPoint}</div>
                    </section>
                </Feed>
            )}
            {product && (
                <Basic id={product.slug} space="space-xs-80 space-md-130 space-xl-210">
                    <div className="row align-items-center gutter-50 gutter-lg-80">
                        <div className="col-xl">
                            <Img className="cheat-left" fluid={product.image.fluid} alt={product.title} />
                        </div>
                        <div className="col-xl">
                            <header className="copy" dangerouslySetInnerHTML={{ __html: product.body.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </Basic>
            )}
            {industries.edges.length > 0 && (
                <Feed id={industry.slug} space="space-xs-80 space-md-130 space-xl-210" item="industry">
                    <header
                        className="copy node-xs-50 node-lg-80 text-lg-center"
                        dangerouslySetInnerHTML={{ __html: industry.body.childMarkdownRemark.html }}
                    />
                    <section className="node-xs-50 node-lg-80 cheat-both">
                        <div className="row gutter-20">{loopIndustry}</div>
                    </section>
                    <footer className="node-xs-50 node-lg-80 text-lg-center">
                        <Button label={industry.action} />
                    </footer>
                </Feed>
            )}
            {testimonials.edges.length > 0 && (
                <CarouselTestimonial id="testimonial" fade={true} controls={false} indicators={false} slides={testimonials} />
            )}
            {contact && (
                <Basic id={contact.slug} space="space-xs-50 space-lg-80" color={5}>
                    <header
                        className="copy attention node-xs-30 node-lg-50 text-lg-center"
                        dangerouslySetInnerHTML={{ __html: contact.body.childMarkdownRemark.html }}
                    />
                </Basic>
            )}
        </Layout>
    );
};

export const query = graphql`
    query pageHome {
        points: allContentfulPoint(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    id
                    title
                    slug
                    body {
                        childMarkdownRemark {
                            html
                        }
                    }
                    order
                }
            }
        }
        industries: allContentfulIndustry(filter: { type: { eq: "main" } }, sort: { fields: order, order: ASC }) {
            edges {
                node {
                    id
                    title
                    slug
                    image {
                        ...imageFeed
                    }
                    body {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    excerpt {
                        excerpt
                    }
                    action
                    order
                }
            }
        }
        testimonials: allContentfulTestimonial(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    id
                    title
                    body {
                        childMarkdownRemark {
                            html
                        }
                    }
                    company
                    order
                }
            }
        }
        splash: contentfulHero(slug: { eq: "splash" }) {
            ...contentSplash
        }
        introduction: contentfulGeneral(slug: { eq: "introduction" }) {
            ...contentGeneral
        }
        product: contentfulGeneral(slug: { eq: "product" }) {
            ...contentGeneral
        }
        industry: contentfulGeneral(slug: { eq: "industry" }) {
            ...contentGeneral
        }
        contact: contentfulGeneral(slug: { eq: "contact" }) {
            ...contentGeneral
        }
    }
`;
