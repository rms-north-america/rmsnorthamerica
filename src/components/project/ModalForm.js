import React, { Component, Fragment } from 'react';
import Parent from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

class ModalForm extends Component {
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
        const { label, kind, size, display, icon, to, modal, form, disabled } = this.props;
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
                <Parent dialogClassName="modal-form" show={show} onHide={this.onHide} centered>
                    <Parent.Body>
                        <header className="node-xs-30 node-lg-50 text-center">
                            <h3>{modal}</h3>
                        </header>
                        <section className="node-xs-30 node-lg-50" dangerouslySetInnerHTML={{ __html: form.form }} />
                    </Parent.Body>
                </Parent>
                {show && (
                    <button type="button" className="modal-close close" onClick={this.onHide}>
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                )}
            </Fragment>
        );
    }
}

ModalForm.propTypes = {
    label: PropTypes.string,
    kind: PropTypes.string,
    size: PropTypes.string,
    display: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
    modal: PropTypes.string,
    form: PropTypes.object,
    disabled: PropTypes.bool,
};

ModalForm.defaultProps = {
    label: 'Watch video',
    kind: 'default',
    size: 'lg',
    display: 'trigger',
    icon: 'none',
    to: 'video',
    modal: 'Form',
    form: undefined,
    disabled: false,
};

export default ModalForm;
