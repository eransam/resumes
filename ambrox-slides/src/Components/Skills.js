import React from 'react';
import SlidesHeader from './SlidesHeader';
import { HashLink as Link } from 'react-router-hash-link';
import icon1 from '../assets/img/icon/1.png'
import icon2 from '../assets/img/icon/2.png'
import icon3 from '../assets/img/icon/3.png'

const Skills = () => {
    return (
        <>
            <div className="skill-area section-area bg-cover">
                <SlidesHeader />
                <div className="container ">
                    <div className="row align-items-center vt-mt-100">
                        <div className="col-lg-1 col-12">
                            <div className="skill-title">
                                <h2 className='rotate-title section-title'>My Skills</h2>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 single-skill-wrap">
                                    <div className="single-skill">
                                        <div className="single-skill-icon">
                                            <img src={icon1} alt="icon1" />
                                        </div>
                                        <div className="single-skill-title">
                                            <h4>
                                                <Link to="/service-single#">Website design</Link>
                                            </h4>
                                        </div>
                                        <div className="single-skill-text">
                                            <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse the constructions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 single-skill-wrap">
                                    <div className="single-skill">
                                        <div className="single-skill-icon">
                                            <img src={icon2} alt="icon2" />
                                        </div>
                                        <div className="single-skill-title">
                                            <h4>
                                                <Link to="/service-single#">App Development</Link>
                                            </h4>
                                        </div>
                                        <div className="single-skill-text">
                                            <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse the constructions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 single-skill-wrap">
                                    <div className="single-skill">
                                        <div className="single-skill-icon">
                                            <img src={icon3} alt="icon3" />
                                        </div>
                                        <div className="single-skill-title">
                                            <h4>
                                                <Link to="/service-single#">UX/UI Design</Link>
                                            </h4>
                                        </div>
                                        <div className="single-skill-text">
                                            <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse the constructions.</p>
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

export default Skills;