import React from 'react'

const ArticleCulture = ({title, slug, content}) => {
    console.log(content)
    return (        
        <article id={`article-${slug}`} style={{marginTop:"40px",marginBottom:"10px"}}>
            <span dangerouslySetInnerHTML={{__html: content}} />
        </article>
    )
}

export default ArticleCulture