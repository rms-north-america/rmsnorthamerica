import React, { Component, Fragment } from 'react';
import OffCanvas from 'react-aria-offcanvas';
import { Events } from 'react-scroll';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.css';
import '../styles/project.css';
import Menu from './Menu';
import Header from './region/Header';
import Footer from './region/Footer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    componentDidMount() {
        Events.scrollEvent.register('end', () => this.onClose());
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('end');
    }
    onOpen() {
        this.setState({
            isOpen: true,
        });
    }
    onClose() {
        this.setState({
            isOpen: false,
        });
    }
    render() {
        const { children } = this.props;
        const { isOpen } = this.state;
        const style = {
            overlay: {
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 9999,
            },
            content: {
                background: '#222',
            },
        };
        return (
            <Fragment>
                <OffCanvas position="right" width="80%" height="100%" labelledby="menu-button" style={style} isOpen={isOpen} onClose={this.onClose}>
                    <Menu offcanvas />
                </OffCanvas>
                <Header isOpen={isOpen} onOpen={this.onOpen} />
                <main id="main" className={isOpen ? 'offcanvas-push offcanvas-push-out' : 'offcanvas-push'} role="main">
                    <div className="container-fluid">{children}</div>
                </main>
                <Footer isOpen={isOpen} />
            </Fragment>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
