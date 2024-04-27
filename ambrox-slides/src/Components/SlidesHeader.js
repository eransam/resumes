import React from 'react';
import { useState } from 'react';
import SocialShare from './SocialShare';
import { toast } from 'react-toastify';
import { HashLink as Link } from 'react-router-hash-link';
import logoIcon from '../assets/img/logo/logo-icon.png'
import logoLight from '../assets/img/logo/logo-light.png'

const SlidesHeader = () => {
    let [canvasToggle, setCanvasToggle] = useState(false)

    let handleSubsScribe = event => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed Successfully")
    }

    return (
        <>
            <div className="slides-header-area">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6 col-4">
                            <div className="logo-icon">
                                <Link to="/#"><img src={logoIcon} alt="logoIcon" /></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-8">
                            <div className="slides-header-right">
                                <div className="slides-menu" onClick={() => setCanvasToggle(!canvasToggle)} >
                                    <span className='bar-1'></span>
                                    <span className='bar-2'></span>
                                    <span className='bar-3'></span>
                                </div>
                                <div className="chat-btn">
                                    <Link to="#">
                                        <i className="ri-chat-1-line"></i>
                                        <span>Chat Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* slides-offcanvas */}
            <div className={`${canvasToggle ? 'header-right-canvas open' : 'header-right-canvas close'}`}>
                <div className="canvas-wrapper">
                    <div className="canvas-header">
                        <Link to='/#'><img src={logoLight} alt="logoLight" /></Link>
                        <button className='close-btn' onClick={() => setCanvasToggle(!canvasToggle)}>
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                    <div className="canvas-body">
                        <div className="canvas-nav widget">
                            <ul>
                                <li><Link to="/service-single#">Service Single</Link></li>
                                <li><Link to="/portfolio-single#">Portfolio Single</Link></li>
                                <li><Link to="/blog-single#">Blog Single</Link></li>
                            </ul>
                        </div>
                        <div className="canvas-about widget">
                            <div className="single-about">
                                <h6>ADDRESS</h6>
                                <span>California, TX 70240</span>
                            </div>
                            <div className="single-about">
                                <h6>EMAIL</h6>
                                <span>support@validtheme.com</span>
                            </div>
                            <div className="single-about">
                                <h6>CONTACT</h6>
                                <span>+44-20-7328-4499</span>
                            </div>
                        </div>
                        <div className="canvas-newsletter widget">
                            <h4 className="title">Get Subscribed!</h4>
                            <form onSubmit={handleSubsScribe}>
                                <div className="canvas-search">
                                    <input type="email" name="email" title='Enter Your E-mail' placeholder='Enter your e-mail' />
                                    <button type='submit'><i className="ti-arrow-right"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="canvas-social">
                            <SocialShare />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SlidesHeader;