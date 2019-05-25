import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { generateID } from '../../function';
import * as menu from '../../menu';

const MenuList = ({ list, label, to }) => {
    const loopList = list.map(({ label, to }) => (
        <li key={generateID()} className="menu-item">
            <Link className="menu-link" title={label} to={to}>
                {label}
            </Link>
        </li>
    ));
    return <ul className="menu-list">{loopList}</ul>;
};

MenuList.propTypes = {
    list: PropTypes.array,
    label: PropTypes.string,
    to: PropTypes.string,
};

MenuList.defaultProps = {
    list: undefined,
    label: undefined,
    to: undefined,
};

const MenuFooter = ({ className }) => (
    <section className={className}>
        <div className="row gutter-50 gutter-lg-80">
            <div className="col-lg">
                <MenuList list={menu.FOOTER_ONE} />
            </div>
            <div className="col-lg">
                <MenuList list={menu.FOOTER_TWO} />
            </div>
            <div className="col-lg">
                <MenuList list={menu.FOOTER_THREE} />
            </div>
            <div className="col-lg">
                <MenuList list={menu.FOOTER_FOUR} />
            </div>
        </div>
    </section>
);

MenuFooter.propTypes = {
    className: PropTypes.string,
};

MenuFooter.defaultProps = {
    className: undefined,
};

export default MenuFooter;
