import React from 'react';
import BlogGallery from './BlogGallery';
import BlogModal from './BlogModal';

const Blog = () => {
    return (
        <>
            <div name="blog" className="blog-style-one-area blog-area default-padding-top bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">News</h4>
                                <h2 className="title">Latest from blog</h2>
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <BlogGallery />
                <BlogModal />
            </div>
        </>
    );
};

export default Blog;