import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { generateID } from '../../function';
import * as path from '../../path';
import postTypes from '../../queries/postTypes';
import Item from '../unit/Item';

const MenuPostType = ({ total }) => {
    const { group, totalCount } = postTypes();
    const loopPostType = group.map((type) => <Item key={generateID()} item={type} directory={path.POST} type="post-type" total={total} />);
    return (
        <aside className="panel">
            <h4>Sections</h4>
            <ul className="menu-list">
                <li id="post-all" className="post post-all menu-item">
                    <Link className="menu-link" title="All" to={path.POST}>
                        {total ? `All (${totalCount})` : 'All'}
                    </Link>
                </li>
                {loopPostType}
            </ul>
        </aside>
    );
};

MenuPostType.propTypes = {
    total: PropTypes.bool,
};

MenuPostType.defaultProps = {
    total: false,
};

export default MenuPostType;
