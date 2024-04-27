import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BlogNextPrev = () => {
    return (
        <>
            <div className="blog-post-prev-next d-none d-sm-flex">
                <Link to="#">
                    <div className="blog-post-prev">
                        <div className="blog-post-prev-icon vt-mr-15">
                            <i className='ti-angle-double-left'></i>
                        </div>
                        <div className="blog-post-link">
                            <span>Previous Post</span>
                            <h5>Discovery incommode</h5>
                        </div>
                    </div>
                </Link>
                <Link to="#">
                    <div className="blog-post-next">
                        <div className="blog-post-link">
                            <span>Next Post</span>
                            <h5>Discovery incommode</h5>
                        </div>
                        <div className="blog-post-next-icon vt-ml-15">
                            <i className='ti-angle-double-right'></i>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="blog-next-prev d-sm-none w-100 vt-sm-mb-40">
                <div className="post-previous ">
                    <Link to="#">
                        <i className="ti-angle-double-left me-1"></i>
                        Previous Post
                    </Link>
                </div>
                <div className="post-next ">
                    <Link to="#">
                        Next Post
                        <i className="ti-angle-double-right ms-1"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogNextPrev;