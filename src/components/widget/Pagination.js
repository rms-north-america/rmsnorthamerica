import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Pagination = ({ pageContext, single }) => {
    const { directory, currentPage, numPages, previous, next } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? `/${directory}` : `/${directory}/${(currentPage - 1).toString()}`;
    const nextPage = `/${directory}/${(currentPage + 1).toString()}`;
    return (
        <nav aria-label="pagination">
            <ul className={`pagination pagination-${single ? 'single' : 'directory'} justify-content-center`}>
                {single && next && (
                    <li className="page-item mr-auto">
                        <Link className="page-link page-link-next" to={`/${directory}/${next.slug}`} rel="next">
                            &larr; {next.title}
                        </Link>
                    </li>
                )}
                {single && previous && (
                    <li className="page-item ml-auto">
                        <Link className="page-link page-link-previous" to={`/${directory}/${previous.slug}`} rel="prev">
                            {previous.title} &rarr;
                        </Link>
                    </li>
                )}
                {!single && !isFirst && (
                    <li className="page-item">
                        <Link className="page-link page-link-previous" to={prevPage} rel="prev">
                            &larr; Newer
                        </Link>
                    </li>
                )}
                {!single &&
                    Array.from({ length: numPages }, (_, i) => (
                        <li key={`page-${i + 1}`} className="page-item">
                            <Link className="page-link" activeClassName="active" to={i === 0 ? `/${directory}` : `/${directory}/${i + 1}`}>
                                {i + 1}
                            </Link>
                        </li>
                    ))}
                {!single && !isLast && (
                    <li className="page-item">
                        <Link className="page-link page-link-next" to={nextPage} rel="next">
                            Older &rarr;
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
    single: PropTypes.bool,
};

Pagination.defaultProps = {
    single: undefined,
};

export default Pagination;
