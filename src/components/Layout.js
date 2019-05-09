import React, { Component, Fragment } from 'react';
import OffCanvas from 'react-aria-offcanvas';
import { Events } from 'react-scroll';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.css';
import '../styles/project.css';
import SEO from './SEO';
import Menu from './Menu';
import Header from './region/Header';
import Footer from './region/Footer';
import Scroll from './widget/Scroll';

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
        const { location, template, title, description, children } = this.props;
        const { isOpen } = this.state;
        const style = {
            overlay: {
                background: 'rgba(34, 34, 34, 0.5)',
                zIndex: 9999,
            },
            content: {
                background: '#1d2c3c',
            },
        };
        return (
            <Fragment>
                <SEO location={location} template={template} title={title} description={description} />
                <OffCanvas position="right" width="80%" height="100%" labelledby="menu-button" style={style} isOpen={isOpen} onClose={this.onClose}>
                    <nav id="menu-offcanvas" className="offcanvas-menu">
                        <Menu offcanvas />
                    </nav>
                </OffCanvas>
                <Header isOpen={isOpen} onOpen={this.onOpen} />
                <main id="main" className={isOpen ? 'offcanvas-push offcanvas-push-out' : 'offcanvas-push'} role="main">
                    <div className="container-fluid">{children}</div>
                </main>
                <Footer isOpen={isOpen} />
                <Scroll position="fixed" up top />
            </Fragment>
        );
    }
}

Layout.propTypes = {
    location: PropTypes.object,
    template: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
    location: undefined,
    template: undefined,
    title: undefined,
    description: undefined,
};

export default Layout;
