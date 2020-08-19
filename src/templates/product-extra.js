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
import POSFeature from '../components/project/POSFeature';
import POSDifferentiator from '../components/project/POSDifferentiator';
import POSIndustry from '../components/project/POSIndustry';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../images/nextArrow.png";
import prevArrow from "../images/prevArrow.png";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={className} style={{ ...style, display: "block", width: "13px", height: "24px"}} onClick={onClick} src={nextArrow}/>
    );
}
function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img className={className} style={{ ...style, display: "block", width: "13px", height: "24px"}} onClick={onClick} src={prevArrow} />
    );
}

export default ({ location, data }) => {
    const { productextra } = data;
    const loopFeature = productextra.features.map((features) => <POSFeature key={features.id} feature={features} />);
    const loopDifferentiator = productextra.differentiators.map((differentiators) => <POSDifferentiator key={differentiators.id} differentiator={differentiators} />);
    const loopIndustry = productextra.industries.map((industries) => <POSIndustry key={industries.id} industry={industries} />);
    const loopPartners = productextra.partners.map((partners) => <div className="text-center"><Img className="image" fixed={partners.fixed} alt={partners.title} /></div>);
    return (
        <Layout
            template={`single single-product productextra single-product-${productextra.slug}`}
            title={productextra.title}
            description={logicDescription(productextra)}
            location={location}
        >
            <Hero
                id={`hero-${productextra.slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={(productextra.cover && productextra.cover.fluid) || productextra.image.fluid}
                alternate={productextra.title}
            >
                <div className="row">
                    <div className="col-lg-8">
                        {productextra.head ? (
                            <header className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: productextra.head.childMarkdownRemark.html }} />
                        ) : (
                            <header className="node-xs-30 node-lg-50">
                                <h1>{productextra.title}</h1>
                                <h2>{logicDescription(productextra)}</h2>
                            </header>
                        )}
                        {productextra.link && (
                            <footer className="node-xs-30 node-lg-50 d-flex">
                                <Button kind="main" size="xl" label={productextra.action || undefined} to={`/${productextra.link.slug}`} />
                            </footer>
                        )}
                    </div>
                </div>
            </Hero>
            {productextra.introduction && (
                <>
                <Basic id={`basic-${productextra.slug}`} space="space-xs-80 space-md-130">
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-md">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: productextra.introduction.childMarkdownRemark.html }} />
                            </div>
                            <div className="col-md d-none d-md-block">
                                {productextra.figure ? (
                                    <Img className="" fluid={productextra.figure.fluid} alt={productextra.title} />
                                ) : (
                                    <figure className="cheat-left height-match">
                                        <Img className="fit exact-center" fluid={productextra.image.fluid} alt={productextra.title} />
                                    </figure>
                                )}
                            </div>
                        </div>
                    </section>
               </Basic>
               <Basic space="space-xs-80" color={5}>
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-xl">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: productextra.industriesBody.childMarkdownRemark.html }} />
                                {loopIndustry.length > 0 && (
                                    <Feed id="client" space="space-xs-50 space-lg-80">
                                        <div className="row justify-content-center gutter-50 gutter-lg-80">{loopIndustry}</div>
                                    </Feed>
                                )}
                                <footer className="node-xs-30 node-lg-50 d-flex text-center">
                                    <Button kind="main" size="xl" label={productextra.industriesAction || undefined} to={`/${productextra.industriesLink.slug}`} />
                                </footer>
                            </div>
                        </div>
                    </section>
                </Basic>
                <Basic space="space-xs-80">
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-xl">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: productextra.featureBody.childMarkdownRemark.html }} />
                                {loopFeature.length > 0 && (
                                    <Feed id="client" space="space-xs-50 space-lg-80">
                                        <div className="row justify-content-center gutter-50 gutter-lg-80">{loopFeature}</div>
                                    </Feed>
                                )}
                                <footer className="node-xs-30 node-lg-50 d-flex text-center">
                                    <Button kind="main" size="xl" label={productextra.featuresAction || undefined} to={`/${productextra.featuresLink.slug}`} />
                                </footer>
                            </div>
                        </div>
                    </section>
                </Basic>
                <Basic space="space-xs-80 space-md-130" color={5}>
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-xl">
                                <header style={{paddingBottom: "30px"}} className="copy" dangerouslySetInnerHTML={{ __html: productextra.integrationBody.childMarkdownRemark.html }} />
                                    <Img className="" fluid={productextra.integrations.fluid} alt={productextra.integrations.title} />
                                <footer style={{paddingTop: "30px"}} className="node-xs-30 node-lg-50 d-flex text-center">
                                    <Button kind="main" size="xl" label="Request a Demo" to={`/${productextra.industriesLink.slug}`} />
                                </footer>
                            </div>
                        </div>
                    </section>
                </Basic>
                <Basic>
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: productextra.differentiatorBody.childMarkdownRemark.html }} />
                        </div>
                    </section>
                </Basic>
                        <div className="row">
                            <div className="col-md d-none d-lg-flex">
                                <div className="d-flex align-self-center" style={{flexGrow: 1}}>
                                    <Img className="" style={{width: '100%', right: '2vw'}} fluid={productextra.differentiatorFigure.fluid} alt={productextra.contactFigure.title} />
                                </div>
                            </div>
                            <div className="col-md d-flex">
                                <div className="d-flex align-self-center flex-grow-1">
                                    {loopDifferentiator.length > 0 && (
                                        <div className="space-xs-50">
                                            <div className="row justify-content-center gutter-50 gutter-lg-80">{loopDifferentiator}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                <Basic space="space-xs-80" color={5}>
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: productextra.partnerBody.childMarkdownRemark.html }} />
                        </div>
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col">
                            <Slider {...sliderSettings} >
                                {loopPartners}
                            </Slider>
                            </div>
                        </div>
                    </section>
                </Basic>
                <Basic space="space-xs-80 space-lg-130">
                    <section className="node-xs-80 node-lg-130">
                        <div className="row gutter-50 gutter-lg-80">
                            <div className="col-md">
                                <header className="copy" dangerouslySetInnerHTML={{ __html: productextra.contactBody.childMarkdownRemark.html }} />
                                <footer className="node-xs-30 node-lg-50 d-flex">
                                    <Button kind="main" size="xl" label="Contact Us" to={`/${productextra.industriesLink.slug}`} />
                                </footer>
                            </div>
                            <div className="col d-none d-lg-flex" style={{paddingRight: '0px', paddingLeft: '0px', marginLeft: '80px', marginRight: '-200px'}}>
                                <div className="d-flex align-self-center" style={{flexGrow: 1, marginLeft: '-80px'}}>
                                    <Img style={{width: '100%', left: '0px'}} fluid={productextra.contactFigure.fluid} alt={productextra.contactFigure.title} />
                                </div>
                            </div>
                        </div>
                    </section>
                </Basic>
                </>
            )}
        </Layout>
    );
};

export const query = graphql`
    query productextraBySlug($slug: String!) {
        productextra: contentfulProductextra(slug: { eq: $slug }) {
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
            introduction {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            figure {
                ...imagePerson
            }
            industriesBody {
                childMarkdownRemark {
                    html
                }
            }
            industries {
                id
                title
                description
                ...imageSmallIcon
            }
            industriesAction
            industriesLink {
                slug
            }
            featureBody {
                childMarkdownRemark {
                    html
                }
            }
            features {
                id
                title
                description
                ...imageIcon
            }
            featuresAction
            featuresLink {
                slug
            }
            integrationBody {
                childMarkdownRemark {
                    html
                }
            }
            integrations {
                ...imageFigure
            }
            differentiatorBody {
                childMarkdownRemark {
                    html
                }
            }
            differentiators {
                id
                title
                description
                ...imageTinyIcon
            }
            differentiatorFigure {
                ...imageHigh
            }
            partnerBody {
                childMarkdownRemark {
                    html
                }
            }
            partners {
                id
                title
                description
                ...imageMediumIcon
            }
            partnerImage {
                ...imageFigure
            }
            contactBody {
                childMarkdownRemark {
                    html
                }
            }
            contactFigure {
                ...imageHigh
            }
        }
    }
`;
export const sliderSettings = {infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, nextArrow: <NextArrow />, prevArrow: <PrevArrow />};
