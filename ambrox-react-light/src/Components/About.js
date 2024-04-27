import React from 'react';
import illustration3 from '../assets/img/illustration/3.png'

const About = () => {
    return (
        <>
            <div name="about" className="about-style-six-area default-padding-top">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-six col-lg-5">
                            <div className="thumb">
                                <img src={illustration3} alt="Thumb" />
                            </div>
                        </div>
                        <div className="about-style-six col-lg-6 offset-lg-1">
                            <h4 className="sub-title">About Me</h4>
                            <h2 className="title">I can develop <br /> that help people</h2>
                            <p>
                                Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites. One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique.
                            </p>
                            <div className="skill-list">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-wordpress"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Professional WordPress Developer</h4>
                                            <span>Top Rated – Upwork</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ri-stack-line"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Senior HTML Developer</h4>
                                            <span>Level Two Seller - Fiverr</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;