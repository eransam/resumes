import React from 'react';
import SlidesHeader from './SlidesHeader';
import { HashLink as Link } from 'react-router-hash-link';
import portfolio1 from '../assets/img/portfolio/1.jpg'
import portfolio4 from '../assets/img/portfolio/4.jpg'
import portfolio6 from '../assets/img/portfolio/6.jpg'

const Portfolio = () => {
    return (
        <>
            <div className="portfolio-area section-area bg-cover">
                <SlidesHeader />
                <div className="container ">
                    <div className="row align-items-center vt-mt-100">
                        <div className="col-lg-1">
                            <div className="portfolio-title section-title">
                                <h2 className='rotate-title'>My Portfolio</h2>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper">
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
                                <div className="col-lg-6 col-xl-4 col-12 single-portfolio-wrapper">
                                    <div className="single-portfolio">
                                        <div className="single-portfolio-thumb">
                                            <img src={portfolio4} alt="portfolio" />
                                        </div>
                                        <div className="single-portfolio-hover d-flex align-items-center">
                                            <div className="portfolio-hover-text ">
                                                <span>Creative</span>
                                                <Link to="/portfolio-single#" className='d-block'>Gaming Apps</Link>
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
                </div>
            </div>
        </>
    );
};

export default Portfolio;