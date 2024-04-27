import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import blog1 from '../assets/img/blog/1.jpg'
import blog2 from '../assets/img/blog/2.jpg'
import blog3 from '../assets/img/blog/3.jpg'

const BlogGallery = () => {
    return (
        <>
            <div className="container">
                <div className="row">

                    {/* Latest Blog 1 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal"><img src={blog1} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal">Discovery earnestly public commanded mentions.</Link>
                                </h4>
                                <div className="meta">
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="ri-user-line"></i> User</Link>
                                        </li>
                                        <li>
                                            <i className="ri-calendar-2-line"></i> 15 Auguest, 2023
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 2 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal"><img src={blog2} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal">Considered imprudence of he friendship boisterous.</Link>
                                </h4>
                                <div className="meta">
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="ri-user-line"></i> User</Link>
                                        </li>
                                        <li>
                                            <i className="ri-calendar-2-line"></i> 16 November, 2023
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 3 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal"><img src={blog3} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal">Overcame breeding or my concerns removing desirous.</Link>
                                </h4>
                                <div className="meta">
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="ri-user-line"></i> User</Link>
                                        </li>
                                        <li>
                                            <i className="ri-calendar-2-line"></i> 28 February, 2023
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

export default BlogGallery;