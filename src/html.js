import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,s){var e=document.createElement("script");e.type="text/javascript";e.async=true;e.src="https://cdn.pagesense.io/js/rmsthehospitalitycloud/dc94acae8a6d4f769a583fe95b98875f.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");`,
                    }}
                />
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
                    This app works best with JavaScript enabled.
                </noscript>
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"228f7b1d3f01f4abe143e86840971053d2b8f411329cf757cf449add5329ac3b2328560f25314e643baef2d1ed2d1423", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");`,
                    }}
                />
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
