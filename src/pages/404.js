import React from 'react';
import { Link } from 'gatsby';
import * as path from '../path';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location }) => (
    <Layout template="not-found" title="404: Not Found" description="This page does not exist." location={location}>
        <Basic id="not-found" space="space-custom">
            <header>
                <h1>404: Not Found</h1>
            </header>
            <section>
                <p>
                    This page does not exist.{' '}
                    <Link title="Home" rel="home" to={path.ROOT}>
                        Return home &rarr;
                    </Link>
                </p>
            </section>
        </Basic>
    </Layout>
);
