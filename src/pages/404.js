import React from 'react';
import { Link } from 'gatsby';
import * as path from '../path';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default () => (
    <Layout title="404: Not Found">
        <Basic id="not-found" space="space-xs-80 space-lg-130">
            <header>
                <h3 className="p-xs-25">404: Not Found</h3>
            </header>
            <section>
                <p>
                    This page does not exist.{' '}
                    <Link title="Home" rel="home" to={path.Root}>
                        Return home &rarr;
                    </Link>
                </p>
            </section>
        </Basic>
    </Layout>
);
