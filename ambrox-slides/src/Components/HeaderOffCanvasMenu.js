import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/img/logo/logo.png'

const HeaderOffCanvasMenu = () => {
    return (
        <>
            <div className="header-offcanvas-area d-lg-none">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <span className='header-hamburger'>
                        <i className="ti-menu"></i>
                    </span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className='mb-0' id="offcanvasRightLabel">
                            <Link to='/#'> <img src={logo} alt="logo" /></Link>
                        </h5>
                        <button type="button" className="close-btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className='ri-close-line'></i>
                        </button>
                    </div>

                    <div className="offcanvas-body">
                        <div className="offcanvas-body-wrap">
                            <nav className='navbar navbar-light'>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/#">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/service-single#">Service Single</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/portfolio-single#">Portfolio Single</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/blog-single#">Blog Single</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/not-found#">Error Page</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/portfolio-page#">Portfolio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/resume-page#">Resume</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderOffCanvasMenu;