import React from 'react';
import site from '../../queries/site';

const MenuFooterLanding = () => {
    const { contact, legal, about, extra } = site();
    return (
        <div className="row gutter-50 gutter-lg-80">
            <div className="col-lg" dangerouslySetInnerHTML={{ __html: contact.childMarkdownRemark.html }} />
            <div className="col-lg" dangerouslySetInnerHTML={{ __html: legal.childMarkdownRemark.html }} />
            <div className="col-lg" dangerouslySetInnerHTML={{ __html: about.childMarkdownRemark.html }} />
            <div className="col-lg" dangerouslySetInnerHTML={{ __html: extra.childMarkdownRemark.html }} />
        </div>
    );
};

export default MenuFooterLanding;
