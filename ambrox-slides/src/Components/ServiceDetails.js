import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ServiceAccordion from './ServiceAccordion';
import banner5 from '../assets/img/banner/5.jpg'

const ServiceDetails = () => {
    return (
        <>
            <div className="service-details-area vt-pt-120 vt-pb-120 vt-md-pt-80 vt-md-pb-80 vt-sm-pb-40 vt-sm-pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="services-single-content">
                                <div className="services-single-image">
                                    <img src={banner5} alt="banner5" />
                                </div>
                                <div className="service-single-marketing vt-mb-40 vt-sm-mb-20">
                                    <div className="services-single-title">
                                        <h2>Best influencer marketing services</h2>
                                    </div>
                                    <p> We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.</p>
                                </div>
                                <div className="service-single-feature vt-mb-30 vt-sm-mb-0">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="service-single-checklist vt-sm-mb-20">
                                                <h4>Included Services</h4>
                                                <ul>
                                                    <li>Monthly SEO Task</li>
                                                    <li>24/7 Alltime Supporting</li>
                                                    <li>Turbo Boosting</li>
                                                    <li>Expert Team Members</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="service-single-list-details">
                                                <h4>The Challenge</h4>
                                                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-single-do vt-mb-40 vt-sm-mb-20">
                                    <h4>What we do?</h4>
                                    <p>Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted.</p>
                                </div>
                                <ServiceAccordion />
                                <div className="service-single-popular vt-md-mb-30">
                                    <h3>Popular Services</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="popular-item">
                                                <i className="flaticon-development"></i>
                                                <h4><Link to="#">Speed Optimization</Link></h4>
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="popular-item">
                                                <i className="flaticon-layers"></i>
                                                <h4><Link to="#">Frontend Development</Link></h4>
                                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-single-sidebar">
                                <div className="service-single-sidebar-list vt-mb-50">
                                    <h4>Services List</h4>
                                    <div className="service-single-list-item">
                                        <ul>
                                            <li><Link to="#">App Integration</Link></li>
                                            <li><Link to="#">Maxed Out Mobile Apps</Link></li>
                                            <li><Link to="#">Cybill Technologies</Link></li>
                                            <li><Link to="#">Hopper Technologies</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="service-single-help bg-cover vt-mb-50">
                                    <div className="service-single-help-info">
                                        <i className="ri-phone-line"></i>
                                        <h5>Need any help?</h5>
                                        <p>We are here to help our customer any time. You can call on 24/7 To Answer Your Question.</p>
                                        <p><a href="tel:+0126679545">(012) 6679545</a></p>
                                    </div>
                                </div>
                                <div className="service-single-brochure">
                                    <h4>Brochure</h4>
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="ri-file-3-line"></i> <span>Download Brochure</span></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="ri-file-3-line"></i> <span>Company Details</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetails;