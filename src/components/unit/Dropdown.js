import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
        this.isDropdown = createRef();
        this.onClick = this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.onBlur);
    }
    onClick() {
        this.setState(
            (prevState) => ({
                toggle: !prevState.toggle,
            }),
            () => (this.state.toggle ? document.addEventListener('click', this.onBlur) : document.removeEventListener('click', this.onBlur)),
        );
    }
    onBlur(event) {
        !this.isDropdown.current.contains(event.target) &&
            this.setState(
                {
                    toggle: false,
                },
                document.removeEventListener('click', this.onBlur),
            );
    }
    render() {
        const { name, label, alignment, caret, children } = this.props;
        const { toggle } = this.state;
        return (
            <li className={`nav-item dropdown ${toggle ? `show` : `hide`}`} ref={this.isDropdown}>
                <button
                    type="button"
                    id={`${name}-dropdown`}
                    className={`nav-btn btn dropdown-toggle ${caret ? 'caret' : 'no-caret'}`}
                    aria-haspopup="true"
                    aria-expanded={toggle ? true : false}
                    onClick={this.onClick}
                >
                    {label}
                </button>
                {toggle && (
                    <div className={`dropdown-menu dropdown-menu-${alignment} show`} aria-labelledby={`${name}-dropdown`}>
                        {children}
                    </div>
                )}
            </li>
        );
    }
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    alignment: PropTypes.string,
    caret: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
    label: 'Dropdown',
    alignment: 'left',
    caret: false,
};

export default Dropdown;
