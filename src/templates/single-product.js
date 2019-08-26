import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';
import Feed from '../components/section/Feed';
import Hero from '../components/section/Hero';
import Button from '../components/unit/Button';
import ArticleFeature from '../components/project/ArticleFeature';
import CarouselTestimonial from '../components/project/CarouselTestimonial';

export default ({ location, data }) => {
    const { product } = data;
    const loopFeature = product.feature.map((feature) => <ArticleFeature key={feature.id} feature={feature} landing />);
    return (
        <Layout
            template={`single single-product single-product-${product.slug}`}
            title={product.title}
            description={logicDescription(product)}
            location={location}
        >
            <Hero
                id={`hero-${product.slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={(product.cover && product.cover.fluid) || product.image.fluid}
                alternate={product.title}
            >
                <div className="row">
                    <div className="col-lg-8">
                        {product.head ? (
                            <header className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: product.head.childMarkdownRemark.html }} />
                        ) : (
                            <header className="node-xs-30 node-lg-50">
                                <h1>{product.title}</h1>
                                <h2>{logicDescription(product)}</h2>
                            </header>
                        )}
                        {product.link && (
                            <footer className="node-xs-30 node-lg-50 d-flex">
                                <Button kind="main" size="xl" label={product.action || undefined} to={`/${product.link.slug}`} />
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
            {product.body && (
                <Basic id={`basic-${product.slug}`} space="space-xs-80 space-md-130 space-xl-210">
                    {product.introduction && (
                        <header
                            className="copy node-xs-80 node-lg-130 text-lg-center"
                            dangerouslySetInnerHTML={{ __html: product.introduction.childMarkdownRemark.html }}
                        />
                    )}
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-xl">
                                {product.figure ? (
                                    <Img className="cheat-left" fluid={product.figure.fluid} alt={product.title} />
                                ) : (
                                    <figure className="cheat-left height-match">
                                        <Img className="fit exact-center" fluid={product.image.fluid} alt={product.title} />
                                    </figure>
                                )}
                            </div>
                            <div className="col-xl">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: product.body.childMarkdownRemark.html }} />
                            </div>
                        </div>
                    </section>
                </Basic>
            )}
            {product.additional && (
                <Basic id="basic-additional-product" space="space-xs-50 space-lg-80" color={5}>
                    <header className="copy attention" dangerouslySetInnerHTML={{ __html: product.additional.childMarkdownRemark.html }} />
                </Basic>
            )}
            {product.testimonial.length > 0 && (
                <CarouselTestimonial id="testimonial" fade={true} controls={false} indicators={false} slides={product.testimonial} />
            )}
            {product.bottom && (
                <Hero
                    id="hero-bottom"
                    height="auto"
                    space="space-xs-50 space-lg-80"
                    opacity="opacity-50"
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    source={(product.background && product.background.fluid) || product.image.fluid}
                    alternate={product.title}
                >
                    <header
                        className="copy node-xs-30 node-lg-50 text-lg-center"
                        dangerouslySetInnerHTML={{ __html: product.bottom.childMarkdownRemark.html }}
                    />
                    {product.link && (
                        <footer className="node-xs-30 node-lg-50 d-flex justify-content-center">
                            <Button kind="main" size="xl" label={product.action || undefined} to={`/${product.link.slug}`} />
                        </footer>
                    )}
                </Hero>
            )}
        </Layout>
    );
};

export const query = graphql`
    query productBySlug($slug: String!) {
        product: contentfulProduct(slug: { eq: $slug }) {
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
            action
            link {
                slug
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
            additional {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            testimonial {
                ...contentTestimonial
            }
            background {
                ...imageHigh
            }
            bottom {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
        }
    }
`;
