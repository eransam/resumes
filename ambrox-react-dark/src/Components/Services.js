import React from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from './ServiceModal';
import icon1 from '../assets/img/icon/1.png'
import icon2 from '../assets/img/icon/2.png'
import icon4 from '../assets/img/icon/4.png'

const Services = () => {
    return (
        <>
            <div name="services" className="services-style-one-area box-layout default-padding bottom-less bg-light">
                <div className="blur-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">My Expertise</h4>
                                <h2 className="title">What I Do </h2>
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={icon1} alt="Icon" />
                                <h4><Link to="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">Website design</Link></h4>
                                <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.
                                </p>
                            </div>
                        </div>

                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={icon2} alt="Icon" />
                                <h4><Link to="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">App Development</Link></h4>
                                <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.
                                </p>
                            </div>
                        </div>

                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <img src={icon4} alt="Icon" />
                                <h4><Link to="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">UX/UI Design</Link></h4>
                                <p>Continue indulged speaking the was horrible for domestic position. Seeing get rather her you not esteem men settle is genius take excuse. Deal say over you age comparison new ham melancholy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ServiceModal />
            </div>
        </>
    );
};

export default Services;