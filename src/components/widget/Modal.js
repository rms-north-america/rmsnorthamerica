import React, { Component, Fragment } from 'react';
import Parent from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.onShow = this.onShow.bind(this);
        this.onHide = this.onHide.bind(this);
    }
    onShow() {
        this.setState({
            show: true,
        });
    }
    onHide() {
        this.setState({
            show: false,
        });
    }
    render() {
        const { label, kind, size, display, icon, to, disabled } = this.props;
        const { show } = this.state;
        return (
            <Fragment>
                <button
                    type="button"
                    className={`btn btn-${kind} btn-${size} btn-${display} icon-${icon} to-${to}`}
                    onClick={this.onShow}
                    disabled={disabled}
                >
                    {label}
                </button>
                <Parent show={show} onHide={this.onHide}>
                    <Parent.Header closeButton>
                        <Parent.Title>Modal heading</Parent.Title>
                    </Parent.Header>
                    <Parent.Body>Woohoo, you're reading this text in a modal!</Parent.Body>
                    <Parent.Footer>
                        <button type="button" onClick={this.onHide}>
                            Close
                        </button>
                    </Parent.Footer>
                </Parent>
            </Fragment>
        );
    }
}

Modal.propTypes = {
    label: PropTypes.string,
    kind: PropTypes.string,
    size: PropTypes.string,
    display: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
    disabled: PropTypes.bool,
};

Modal.defaultProps = {
    label: 'Watch video',
    kind: 'default',
    size: 'lg',
    display: 'trigger',
    icon: 'none',
    to: 'video',
    disabled: false,
};

export default Modal;
