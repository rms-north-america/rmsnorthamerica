import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { generateID } from '../../function';
import * as path from '../../path';
import interfaceTypes from '../../queries/interfaceTypes';
import Item from '../unit/Item';

const MenuInterfaceType = ({ total }) => {
    const { group, totalCount } = interfaceTypes();
    const loopInterfaceType = group.map((type) => <Item key={generateID()} item={type} directory={path.PRODUCT_INTERFACES} type="interface-type" />);
    return (
        <aside className="panel">
            <h4>Types</h4>
            <ul className="menu-list">
                <li id="interface-all" className="interface interface-all menu-item">
                    <Link className="menu-link" title="All" to={path.PRODUCT_INTERFACES}>
                        {total ? `All (${totalCount})` : 'All'}
                    </Link>
                </li>
                {loopInterfaceType}
            </ul>
        </aside>
    );
};

MenuInterfaceType.propTypes = {
    total: PropTypes.bool,
};

MenuInterfaceType.defaultProps = {
    total: false,
};

export default MenuInterfaceType;
