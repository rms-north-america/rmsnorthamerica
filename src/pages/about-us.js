import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import ArticlePerson from '../components/project/ArticlePerson';
import AboutTestimonial from '../components/project/AboutTestimonial'
import ArticleIntroduction from '../components/project/ArticleIntroduction'
import JoinTeam from '../components/project/JoinTeam'
import Hero from '../components/section/Hero';
export default ({ location, data }) => {
    const { team, page, testimonials } = data;
    const loopPerson = team.edges.map(({ node: person }) => <ArticlePerson key={person.id} person={person} />);
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={logicDescription(page)} location={location}>
            {page.head && (
                <Hero
                    id={`hero-${page.slug}`}
                    height="standard"
                    opacity="opacity-0"
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    source={page.image.fluid}
                    alternate={page.title}
                >
                    <div className="aboutus-header">
                        <span style={{fontSize:"26px",fontWeight:'bold'}}>{page.title}</span>
                        <span dangerouslySetInnerHTML={{ __html: page.head.childMarkdownRemark.html }} />
                    </div>
                </Hero>
            )}
            
            <ArticleIntroduction 
                title={page.title}
                detail={page.visiontext.childMarkdownRemark.html}
                fluid={page.visionphoto.fluid}
                showStyle="image-right"
            />
            <ArticleIntroduction 
                title={page.title}
                detail={page.missiontext.childMarkdownRemark.html}
                fluid={page.missionphoto.fluid}
                showStyle="image-left"
            />
            <ArticleIntroduction 
                title={page.title}
                detail={page.valuetext.childMarkdownRemark.html}
                fluid={page.valuephoto.fluid}
                showStyle="image-right"
            />

            <div className="container">
                <section className="row node-xs-50 node-lg-80">
                    <div className="col-lg-3 col-md-6">
                        <div className="aboutus-detail-up">
                            <span>Founded</span>
                        </div>
                        <div className="aboutus-detail-down">
                            <span>1985</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="aboutus-detail-up">
                            <span>Countries</span>
                        </div>
                        <div className="aboutus-detail-down">
                            <span>43</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="aboutus-detail-up">
                            <span>Employees</span>
                        </div>
                        <div className="aboutus-detail-down">
                            <span>200+</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="aboutus-detail-up">
                            <span>Locations</span>
                        </div>
                        <div className="aboutus-detail-down">
                            <span>07</span>
                        </div>
                    </div>
                </section>
                <span className="aboutus-sub-title-team">
                    Meet The Team
                </span>
                <section className="node-xs-50 node-lg-80">
                    <div className="row gutter-50">{loopPerson}</div>
                </section>
            </div> 
            <JoinTeam />           
        </Layout>
    );
};

export const query = graphql`
    query pageAboutus {
        team: allContentfulPerson(sort: { fields: order, order: ASC }) {
            edges {
                node {
                    ...contentPerson
                }
            }
        }
        page: contentfulNewAboutUs(slug: { eq: "about-us" }) {
            title
            slug
            head {
                childMarkdownRemark {
                    html
                    excerpt
                }
            }
            image {
                ...imageHero
            }
            visiontext {
                childMarkdownRemark {
                    html
                }
            }            
            visionphoto {
                ...imageAbout
            }
            missiontext {
                childMarkdownRemark {
                    html
                }
            }   
            missionphoto {
                ...imageAbout
            }         
            valuetext {
                childMarkdownRemark {
                    html
                }
            }     
            valuephoto {
                ...imageAbout
            }     
        }
        testimonials: allContentfulTestimonial(filter: { page: { in: "aboutus" } }, sort: { fields: order, order: ASC }) {
            nodes {
                ...contentTestimonial
            }
        }
    }
`;
