import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ArticlePerson = ({ person }) => (
    <article key={person.id} id={`person-${person.slug}`} className={`person person-${person.order} col-lg-3 text-center`}>
        <figure>
            <Img className="image" fluid={person.image.fluid} alt={person.title} />
        </figure>
        <header>
            <h3 className="person-name p-xs-15">{person.title}</h3>
            <h4 className="person-position p-xs-15">{person.position}</h4>
        </header>
    </article>
);

ArticlePerson.propTypes = {
    person: PropTypes.object.isRequired,
};

export default ArticlePerson;
