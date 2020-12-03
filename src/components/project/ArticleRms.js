import React from 'react'
import Img from 'gatsby-image'
import Button from '../../components/unit/Button'
const ArticleRms = ({data, showStyle, seemore, seeurl, alignment}) => {
    console.log(data)
    return ( 
        <article className="row image-row">
            {showStyle === "image-right" && 
            <div className="col-md-7">
                <div className="sub-text-left">
                    <span className="rms-article-title">
                        {data.title}
                    </span>
                    {alignment === "1" && <div className="">
                        <span dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html}} className="rms-content-top"/>
                        <div className="row rms-row" >
                            <div className="col-4">
                                { data.subImageLeft && 
                                    <Img fluid={data.subImageLeft.fluid} />
                                }
                                { data.subImageRight && 
                                    <Img fluid={data.subImageRight.fluid} />
                                }
                            </div>
                            <div className="col-4">
                                <div className="rms-sub-row">
                                    { data.firstSubContent && 
                                        <span dangerouslySetInnerHTML={{__html: data.firstSubContent.childMarkdownRemark.html}} />
                                    }
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="rms-sub-row">
                                    { data.secondSubContent && 
                                        <span dangerouslySetInnerHTML={{__html: data.secondSubContent.childMarkdownRemark.html}} />
                                    }
                                </div>
                            </div>
                        </div>
                        <span dangerouslySetInnerHTML={{__html: data.bottomContent.childMarkdownRemark.html}} />
                    </div>}
                </div>
                <div style={{marginLeft:"calc(50% - 60px)"}}>
                    {seemore && <Button kind="main" size="xl" label={seemore} to={seeurl} />}
                </div>
            </div>}
            <div className="col-md-5 col-xs-12 aboutus-image">
                <Img fluid={data.image.fluid} alt={data.title} />
            </div>
            {showStyle === "image-left" && <div className="col-md-7 col-xs-12">
                <div className="sub-text-right">
                    <span className="rms-article-title">
                        {data.title}
                    </span>
                    {alignment === "2" && <div className="">
                        <span dangerouslySetInnerHTML={{__html: data.content.childMarkdownRemark.html}}  className="rms-content-top"/>
                        <div className="row rms-row">
                            <div className="col-6">
                                <div className="rms-image-wrapper">
                                    { data.subImageLeft && 
                                        <Img fluid={data.subImageLeft.fluid} />
                                    }
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rms-image-wrapper">
                                    { data.subImageRight && 
                                        <Img fluid={data.subImageRight.fluid} />
                                    }
                                </div>
                                <div className="rms-sub-row">
                                    { data.firstSubContent && 
                                        <span dangerouslySetInnerHTML={{__html: data.firstSubContent.childMarkdownRemark.html}} />
                                    }
                                    { data.secondSubContent && 
                                        <span dangerouslySetInnerHTML={{__html: data.secondSubContent.childMarkdownRemark.html}} />
                                    }
                                </div>
                            </div>
                        </div>
                        {data.bottomContent &&  <span dangerouslySetInnerHTML={{__html: data.bottomContent.childMarkdownRemark.html}} /> }
                    </div>}
                </div>
                <div style={{marginLeft:"calc(7%)",marginTop:"30px"}}>
                    {seemore && <Button kind="main" size="xl" label={seemore} to={seeurl} />}
                </div>
            </div>}

        </article>
    )
}
export default ArticleRms