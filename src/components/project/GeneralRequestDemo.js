import React from 'react';
import Basic from '../section/Basic';
import generalRequestDemo from '../../queries/generalRequestDemo';

const GeneralRequestDemo = () => {
    const { slug, body } = generalRequestDemo();
    return (
        body && (
            <Basic id={slug} space="space-xs-50 space-lg-80" color={5}>
                <header
                    className="copy attention node-xs-30 node-lg-50 text-lg-center"
                    dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
                />
            </Basic>
        )
    );
};

export default GeneralRequestDemo;
