import React from 'react';
import generalCallOut from '../../queries/generalCallOut';
import Hero from '../section/Hero';
import ModalForm from '../project/ModalForm';

const GeneralCallOut = ({ style, landing }) => {
    const { slug, image, body } = generalCallOut();
    return (
        body && (
            <Hero
                id={`hero-${slug}`}
                height="standard"
                opacity="opacity-50"
                tint={style.HERO_TINT}
                color={style.HERO_COLOR}
                source={(image && image.fluid) || landing.image.fluid}
                alternate={landing.title}
            >
                <header className="copy node-xs-30 node-lg-50 text-lg-center" dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
                {landing.form && (
                    <footer className="node-xs-30 node-lg-50 d-flex justify-content-center">
                        <ModalForm kind="main" size="xl" to="form" label={landing.trigger || undefined} modal={landing.modal} form={landing.form} />
                    </footer>
                )}
            </Hero>
        )
    );
};

export default GeneralCallOut;
