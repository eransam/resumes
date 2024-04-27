import React from 'react';
import logo from '../assets/img/logo/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import HeaderOffCanvasMenu from './HeaderOffCanvasMenu';

const Header = () => {
  return (
    <>
      <div className="header-area vt-pt-10 vt-pb-10 vt-md-pt-20 vt-md-pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-5">
              <div className="logo-area">
                <Link to='/#'><img src={logo} alt="logo" /></Link>
              </div>
            </div>
            <div className="col-md-6 col-2">
              <div className="menu-items d-none d-lg-block">
                <nav>
                  <ul className='text-center'>
                    <li><Link to="/#">Home</Link></li>
                    <li className='dropdowns'><Link to="#">Pages</Link>
                      <ul className="submenu">
                        <li><Link to="/service-single#">Service Single</Link></li>
                        <li><Link to="/portfolio-single#">Portfolio Single</Link></li>
                        <li><Link to="/blog-single#">Blog Single</Link></li>
                        <li><Link to="/not-found#">Error Page</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/portfolio-page#">Portfolio</Link></li>
                    <li><Link to="/resume-page#">Resume</Link></li>
                  </ul>
                </nav>
              </div>
              <HeaderOffCanvasMenu />
            </div>
            <div className="col-md-3 col-5">
              <Link to="/contact-page#"><button className='btn circle btn-theme effect'>Contact Us</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;