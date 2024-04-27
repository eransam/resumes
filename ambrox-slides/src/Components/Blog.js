import React from 'react';
import SlidesHeader from './SlidesHeader';
import { HashLink as Link } from 'react-router-hash-link';
import blog1 from '../assets/img/blog/1.jpg'
import blog2 from '../assets/img/blog/2.jpg'
import blog3 from '../assets/img/blog/3.jpg'


const Blog = () => {
    return (
        <>
            <div className="blog-area section-area bg-cover">
                <SlidesHeader />
                <div className="container">
                    <div className="row align-items-center vt-mt-100">
                        <div className="col-lg-1">
                            <div className="blog-title section-title">
                                <h2 className='rotate-title'>My Blog</h2>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4 single-blog-wrap">
                                    <div className="single-blog-item">
                                        <div className="blog-thumb">
                                            <Link to="/blog-single#">
                                                <img src={blog1} alt="blog1" />
                                            </Link>
                                        </div>
                                        <div className="blog-title">
                                            <Link to="/blog-single#">
                                                <h4>Discovery earnestly public commanded mentions.</h4>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="#" ><i className="ri-user-line"></i> <span>User</span> </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-calendar-2-line"></i> <span> 15 Auguest, 2023</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 single-blog-wrap">
                                    <div className="single-blog-item">
                                        <div className="blog-thumb">
                                            <Link to="/blog-single#">
                                                <img src={blog2} alt="blog2" />
                                            </Link>
                                        </div>
                                        <div className="blog-title">
                                            <Link to="/blog-single#">
                                                <h4>Considered imprudence of he friendship boisterous.</h4>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="#"> <i className="ri-user-line"></i> <span>User</span> </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-calendar-2-line"></i> <span> 16 November, 2023</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 single-blog-wrap">
                                    <div className="single-blog-item">
                                        <div className="blog-thumb">
                                            <Link to="/blog-single#">
                                                <img src={blog3} alt="blog3" />
                                            </Link>
                                        </div>
                                        <div className="blog-title">
                                            <Link to="/blog-single#">
                                                <h4>Overcame breeding or my concerns desirous.</h4>
                                            </Link>
                                        </div>
                                        <div className="blog-meta">
                                            <ul>
                                                <li>
                                                    <Link to="#" > <i className="ri-user-line"></i> <span>User</span> </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-calendar-2-line"></i> <span> 28 February, 2023</span>
                                                </li>
                                            </ul>
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

export default Blog;