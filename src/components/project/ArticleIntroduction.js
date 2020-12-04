import React from 'react'
import Img from 'gatsby-image'
import Button from '../../components/unit/Button'
const ArticleIntroduction = ({detail, fluid, title, showStyle, seemore, seeurl}) => {
    return ( 
        <article className="row image-row">
            {showStyle === "image-right" && 
            <div className="col-md-7 col-xs-12">
                <div className="sub-text-left">
                    <span dangerouslySetInnerHTML={{__html:detail}} />
                </div>
                <div style={{marginLeft:"calc(50% - 60px)"}}>
                    {seemore && <Button kind="main" size="xl" label={seemore} to={seeurl} /rms-gives>}
                </div>
            </div>}
            <div className="col-md-5 col-xs-12 aboutus-image">
                <Img fluid={fluid} alt={title} />
            </div>
            {showStyle === "image-left" && <div className="col-md-7 col-xs-12">
                <div className="sub-text-right">
                    <span dangerouslySetInnerHTML={{__html:detail}} />
                </div>
                <div style={{marginLeft:"calc(6%)",marginTop:"50px"}}>
                    {seemore && <Button kind="main" size="xl" label={seemore} to={seeurl} />}
                </div>
            </div>}

        </article>
    )
}
export default ArticleIntroduction
