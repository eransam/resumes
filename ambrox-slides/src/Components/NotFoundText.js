import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NotFoundText = () => {
    return (
        <>
            <div className="error-page-area text-center vt-pt-120 vt-pb-120 vt-md-pt-80 vt-md-pb-80 vt-sm-pb-40 vt-sm-pt-40 d-flex align-items-center ">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="error-box">
                                <h1>404</h1>
                                <h2>Oops! That page can’t be found.</h2>
                                <p>The page you are looking for might have been removed had its name changed or its temporarily unavailable.</p>
                                <Link className="btn mt-20 btn-md circle btn-theme smooth-menu" to="/#">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundText;