import React from 'react';
import { graphql } from 'gatsby';
import { logicDescription } from '../logic';
import * as style from '../style';
import Layout from '../components/Layout';
import ArticleIntroduction from '../components/project/ArticleIntroduction'
import JoinTeam from '../components/project/JoinTeam'
import ArticleBenifits from '../components/project/ArticleBenifits'
import ArticleCulture from '../components/project/ArticleCulture'
import Hero from '../components/section/Hero';
import Button from '../components/unit/Button'
import Img from 'gatsby-image'
export default ({ location, data }) => {
    const { page, diversity, wellness, recognition, growth } = data;
    console.log(page)
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
            <div className="container">
                <span className="aboutus-sub-title">
                    Benifits
                </span>
                <ArticleBenifits /> 
                <article className="row" style={{marginTop:"50px"}}>
                    <div className="col-md-6" style={{marginBottom: "30px"}}>
                        {page.missiontext && 
                        <div className="career-culture-left">
                            <span dangerouslySetInnerHTML={{ __html: page.missiontext.childMarkdownRemark.html }} />
                        </div>
                        }
                    </div>
                    <div className="col-md-6" style={{}}>
                        {page.missionphoto && <Img fluid={page.missionphoto.fluid} /> }
                    </div>                    
                </article>
                <article className="row" style={{}}>
                    <div className="col-md-6" style={{}}>
                        <ArticleCulture title={diversity.title} slug={diversity.slug} content={diversity.content.childMarkdownRemark.html} />
                        <ArticleCulture title={wellness.title} slug={wellness.slug} content={wellness.content.childMarkdownRemark.html} />
                    </div>
                    <div className="col-md-6" style={{}}>
                        <ArticleCulture title={recognition.title} slug={recognition.slug} content={recognition.content.childMarkdownRemark.html} />
                        <ArticleCulture title={growth.title} slug={growth.slug} content={growth.content.childMarkdownRemark.html} />
                    </div>
                </article>
                <div style={{textAlign:"center",marginTop:"40px"}}>
                    <Button kind="main" size="xl" label="Our Open Positions" to="/" />
                </div>
            </div> 
            <ArticleIntroduction 
                title={page.title}
                detail={page.valuetext.childMarkdownRemark.html}
                fluid={page.valuephoto.fluid}
                showStyle="image-left"
                seemore={page.seemore}
                seeurl="/"
            />            
            <JoinTeam />           
        </Layout>
    );
};

export const query = graphql`
    query pageJointeam {
        page: contentfulNewAboutUs(slug: { eq: "careers" }) {
            title
            slug
            seemore
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
        },
        diversity: contentfulCultureText(slug: {eq: "diversity"}){
            title,
            slug,
            content {
                childMarkdownRemark {
                    html
                }
            }       
        },
        growth: contentfulCultureText(slug: {eq: "growth"}){
            title,
            slug,
            content {
                childMarkdownRemark {
                    html
                }
            }       
        },
        wellness: contentfulCultureText(slug: {eq: "wellness"}){
            title,
            slug,
            content {
                childMarkdownRemark {
                    html
                }
            }       
        },
        recognition: contentfulCultureText(slug: {eq: "recognition"}){
            title,
            slug,
            content {
                childMarkdownRemark {
                    html
                }
            }       
        }
    }
`;

