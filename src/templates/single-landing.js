import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import Hero from '../components/section/Hero';
import ModalForm from '../components/project/ModalForm';

export default ({ location, data }) => {
    const { landing } = data;
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
            figure {
                ...imageFigure
            }
            body {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            trigger
            modal
            form {
                form
            }
        }
    }
`;
