import React from 'react'
import * as style from '../../style';
import Button from '../../components/unit/Button'
import Hero from '../../components/section/Hero';
import joinTeam from '../../queries/joinTeam';

const JoinTeam = () => {
    const {title, slug, image, body, action} = joinTeam()
    return (
        <section className="aboutus-bottom-section">
            {title && (
                <Hero
                    id={`hero-${slug}-bottom`}
                    height="standard"
                    opacity="opacity-0"
                    tint={style.HERO_TINT}
                    color={style.HERO_COLOR}
                    source={image.fluid}
                    alternate={title}
                >
                    <div className="aboutus-bottom">
                        <span dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
                        {action && <Button kind="main" size="xl" label={action || undefined} to={`/`} />}
                    </div>
                </Hero>
            )}
        </section>
    )
}
export default JoinTeam