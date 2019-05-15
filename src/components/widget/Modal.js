import React, { Component, Fragment } from 'react';
import Parent, { Body } from 'react-bootstrap/Modal';
import Embed from 'react-bootstrap/ResponsiveEmbed';
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
        const { label, kind, size, display, icon, to, video, disabled } = this.props;
        const { show } = this.state;
        const host = 'https://www.youtube.com/embed/';
        const parameter =
            '?autoplay=1&autohide=1&controls=1&showinfo=0&hd=1&modestbranding=1&loop=1&rel=0&fs=1&cc_load_policy=0&iv_load_policy=3&disablekb=1&enablejsapi=1&widgetid=1';
        const source = host + video + parameter;
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
                <Parent dialogClassName="modal-total modal-video" show={show} onHide={this.onHide} centered>
                    <Body>
                        <Embed aspectRatio="16by9">
                            <iframe
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                src={source}
                                title={label}
                                allowFullScreen
                            />
                        </Embed>
                    </Body>
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

Modal.propTypes = {
    label: PropTypes.string,
    kind: PropTypes.string,
    size: PropTypes.string,
    display: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
    video: PropTypes.string,
    disabled: PropTypes.bool,
};

Modal.defaultProps = {
    label: 'Watch video',
    kind: 'default',
    size: 'lg',
    display: 'trigger',
    icon: 'none',
    to: 'video',
    video: undefined,
    disabled: false,
};

export default Modal;
