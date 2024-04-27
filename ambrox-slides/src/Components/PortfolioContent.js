import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import portfolio1 from '../assets/img/portfolio/1.jpg'
import portfolio2 from '../assets/img/portfolio/2.jpg'
import portfolio4 from '../assets/img/portfolio/4.jpg'
import portfolio5 from '../assets/img/portfolio/5.jpg'
import portfolio6 from '../assets/img/portfolio/6.jpg'
import portfolio7 from '../assets/img/portfolio/7.jpg'

const PortfolioContent = () => {
    return (
        <>
            <div className="portfolio-content vt-pt-120 vt-pb-90 vt-md-pt-80 vt-md-pb-30 vt-sm-pb-0 vt-sm-pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper vt-mb-30 vt-md-mb-10 vt-sm-mb-0">
                            <div className="single-portfolio">
                                <div className="single-portfolio-thumb">
                                    <img src={portfolio1} alt="portfolio1" />
                                </div>
                                <div className="single-portfolio-hover d-flex align-items-center">
                                    <div className="portfolio-hover-text ">
                                        <span>Components</span>
                                        <Link to="/portfolio-single#" className='d-block'>UI Design</Link>
                                    </div>
                                    <div className="portfolio-hover-icon">
                                        <Link to="/portfolio-single#"> <i className="ri-arrow-right-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper vt-mb-30 vt-md-mb-10 vt-sm-mb-0">
                            <div className="single-portfolio">
                                <div className="single-portfolio-thumb">
                                    <img src={portfolio2} alt="portfolio2" />
                                </div>
                                <div className="single-portfolio-hover d-flex align-items-center">
                                    <div className="portfolio-hover-text ">
                                        <span>Components</span>
                                        <Link to="/portfolio-single#" className='d-block'>UI Design</Link>
                                    </div>
                                    <div className="portfolio-hover-icon">
                                        <Link to="/portfolio-single#"> <i className="ri-arrow-right-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper vt-mb-30 vt-md-mb-10 vt-sm-mb-0">
                            <div className="single-portfolio">
                                <div className="single-portfolio-thumb">
                                    <img src={portfolio7} alt="portfolio7" />
                                </div>
                                <div className="single-portfolio-hover d-flex align-items-center">
                                    <div className="portfolio-hover-text ">
                                        <span>Components</span>
                                        <Link to="/portfolio-single#" className='d-block'>UI Design</Link>
                                    </div>
                                    <div className="portfolio-hover-icon">
                                        <Link to="/portfolio-single#"> <i className="ri-arrow-right-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper vt-mb-30 vt-md-mb-10 vt-sm-mb-0">
                            <div className="single-portfolio">
                                <div className="single-portfolio-thumb">
                                    <img src={portfolio4} alt="portfolio" />
                                </div>
                                <div className="single-portfolio-hover d-flex align-items-center">
                                    <div className="portfolio-hover-text ">
                                        <span>Creative</span>
                                        <Link to="/portfolio-single#" className='d-block'>Health Apps</Link>
                                    </div>
                                    <div className="portfolio-hover-icon">
                                        <Link to="/portfolio-single#"> <i className="ri-arrow-right-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper vt-mb-30 vt-md-mb-10 vt-sm-mb-0">
                            <div className="single-portfolio">
                                <div className="single-portfolio-thumb">
                                    <img src={portfolio5} alt="portfolio5" />
                                </div>
                                <div className="single-portfolio-hover d-flex align-items-center">
                                    <div className="portfolio-hover-text ">
                                        <span>Creative</span>
                                        <Link to="/portfolio-single#" className='d-block'>Health Apps</Link>
                                    </div>
                                    <div className="portfolio-hover-icon">
                                        <Link to="/portfolio-single#"> <i className="ri-arrow-right-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper">
                            <div className="single-portfolio">
                                <div className="single-portfolio-thumb">
                                    <img src={portfolio6} alt="portfolio6" />
                                </div>
                                <div className="single-portfolio-hover d-flex align-items-center">
                                    <div className="portfolio-hover-text ">
                                        <span>Business</span>
                                        <Link to="/portfolio-single#" className='d-block'>Business Apps</Link>
                                    </div>
                                    <div className="portfolio-hover-icon">
                                        <Link to="/portfolio-single#"> <i className="ri-arrow-right-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioContent;