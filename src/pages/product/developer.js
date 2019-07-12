import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { logicDescription } from '../../logic';
import * as style from '../../style';
import Layout from '../../components/Layout';
import Basic from '../../components/section/Basic';
import Feed from '../../components/section/Feed';
import Hero from '../../components/section/Hero';
import Modal from '../../components/widget/Modal';
import ArticleFeature from '../../components/project/ArticleFeature';
import CarouselTestimonial from '../../components/project/CarouselTestimonial';
import GeneralRequestDemo from '../../components/project/GeneralRequestDemo';

export default ({ location, data }) => {
    const { features, testimonials, page } = data;
    const loopFeature = features.edges.map(({ node: feature }) => <ArticleFeature key={feature.id} feature={feature} />);
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            <Hero
                id={`hero-${page.slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={(page.cover && page.cover.fluid) || page.image.fluid}
                alternate={page.title}
            >
                {page.head ? (
                    <header className="node-xs-30 node-lg-50 text-center" dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }} />
                ) : (
                    <header className="node-xs-30 node-lg-50 text-center">
                        <h1>{page.title}</h1>
                        <h2>{logicDescription(page)}</h2>
                    </header>
                )}
                {page.video && (
                    <footer className="node-xs-30 node-lg-50 d-flex justify-content-center">
                        <Modal kind="link" size="xl" icon="play" label={page.trigger || undefined} video={page.video} />
                    </footer>
                )}
            </Hero>
            {page.body && (
                <Basic id={`basic-${page.slug}`} space="space-xs-80 space-md-130 space-xl-210">
                    <div className="row gutter-50 gutter-lg-80">
                        <div className="col-xl">
                            {page.figure ? (
                                <Img className="cheat-left" fluid={page.figure.fluid} alt={page.title} />
                            ) : (
                                <figure className="cheat-left height-match">
                                    <Img className="fit exact-center" fluid={page.image.fluid} alt={page.title} />
                                </figure>
                            )}
                        </div>
                        <div className="col-xl">
                            <header className="copy" dangerouslySetInnerHTML={{ __html: page.body.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </Basic>
            )}
            {loopFeature.length > 0 && (
                <Feed id="feed-feature" space="space-xs-80 space-md-130 space-xl-210" item="feature">
                    <header className="copy node-xs-50 node-lg-80 text-lg-center">
                        <h3>Available Features</h3>
                    </header>
                    <section className="node-xs-50 node-lg-80">
                        <div className="row gutter-50 gutter-lg-80">{loopFeature}</div>
                    </section>
                </Feed>
            )}
            {testimonials.nodes.length > 0 && (
                <CarouselTestimonial id="testimonial" fade={true} controls={false} indicators={false} slides={testimonials.nodes} />
            )}
            <GeneralRequestDemo />
        </Layout>
    );
};

export const query = graphql`
    query pageDeveloper {
        features: allContentfulFeature(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentFeature
                }
            }
        }
        testimonials: allContentfulTestimonial(filter: { page: { in: "api-developer" } }, sort: { fields: order, order: ASC }) {
            nodes {
                ...contentTestimonial
            }
        }
        page: contentfulPage(slug: { eq: "api-developer" }) {
            ...contentPage
        }
    }
`;
