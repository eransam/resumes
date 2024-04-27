import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Breadcrumbs = (props) => {
    const { pageTitle } = props;

    return (
        <>
            <div className="breadcrumb-area dark-shadow bg-cover d-flex align-items-center text-center text-light vt-mt-108 vt-md-mt-94 vt-sm-mt-88">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{pageTitle ? pageTitle : "Service Single"}</h1>
                            <ul className="breadcrumb d-flex justify-content-center mb-0">
                                <li>
                                    <Link to="#"><i className="ri-home-8-line"></i> Home</Link>
                                </li>
                                <li>
                                    <i className="ri-arrow-right-s-line"></i> {pageTitle ? pageTitle : "Not Found"}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumbs;