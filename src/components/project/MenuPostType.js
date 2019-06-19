import React from 'react';
import PropTypes from 'prop-types';
import { generateID } from '../../function';
import Item from '../../components/unit/Item';

const MenuPostType = ({ pageContext }) => {
    const loopPostType = pageContext.types.map((type) => <Item key={generateID()} item={type} archive={pageContext.archive} type="post-type" />);
    return (
        <aside className="panel">
            <h4>Sections</h4>
            <ul className="menu-list">{loopPostType}</ul>
        </aside>
    );
};

MenuPostType.propTypes = {
    pageContext: PropTypes.object.isRequired,
};

export default MenuPostType;
