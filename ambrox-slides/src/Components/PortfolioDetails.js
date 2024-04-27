import React from 'react';
import SocialShare from './SocialShare';
import banner2 from '../assets/img/banner/2.jpg'
import thumb1 from '../assets/img/thumb/1.jpg'
import thumb2 from '../assets/img/thumb/2.jpg'

const PortfolioDetails = () => {
    return (
        <>
            <div className="portfolio-details-area vt-pt-120 vt-pb-120 vt-md-pt-80 vt-md-pb-80 vt-sm-pb-40 vt-sm-pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-details-content">
                                <div className="portfolio-details-img vt-mb-50 vt-sm-mb-40">
                                    <img src={banner2} alt="banner2" />
                                </div>
                                <div className="portfolio-details-box-wrapper">
                                    <div className="portfolio-details-box-info">
                                        <ul>
                                            <li>Client <span>Validthemes</span></li>
                                            <li>Project Type <span>Website Growth</span></li>
                                            <li>Date <span>25 February, 2023</span></li>
                                            <li>Address <span>New York United State</span></li>
                                        </ul>
                                    </div>
                                    <div className="social-share">
                                        <h4>Share:</h4>
                                        <SocialShare />
                                    </div>
                                </div>
                                <div className="project-maintenance">
                                    <h2>Ongoing Website Maintenance</h2>
                                    <p>Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoqu. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum.</p>
                                    <div className="project-maintenance-checklist">
                                        <ul>
                                            <li>
                                                <h4>WordPress Support</h4>
                                                <p>Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra.</p>
                                            </li>
                                            <li>
                                                <h4>Social Media Management</h4>
                                                <p>Energy nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="project-details-bottom">
                                        <p>Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper. vivamus nonummy nisl posuere rutrum</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={thumb1} alt="thumb1" />
                                            </div>
                                            <div className="col-md-6">
                                                <img src={thumb2} alt="thumb2" />
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

export default PortfolioDetails;