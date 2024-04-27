import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BlogSingleText from './BlogSingleText';
import BlogComment from './BlogComment';
import BlogSearch from './BlogSearch';
import BlogRecentPost from './BlogRecentPost';
import BlogCategoryList from './BlogCategoryList';
import BlogGallery from './BlogGallery';
import BlogArchives from './BlogArchives';
import BlogTags from './BlogTags';
import BlogNextPrev from './BlogNextPrev';
import BlogAuthor from './BlogAuthor';
import SocialShare from './SocialShare';

const BlogSingleDetails = () => {
    return (
        <>
            <div className="blog-single-area vt-pt-120 vt-pb-120 vt-md-pt-80 vt-md-pb-80 vt-sm-pb-40 vt-sm-pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-single-left">
                                <div className="blog-single-content">
                                    <BlogSingleText />
                                    <BlogAuthor />
                                    <div className="blog-single-tags-share">
                                        <div className="blog-single-tags">
                                            <h4>Tags:</h4>
                                            <Link to="#">Algorithm</Link>
                                            <Link to="#">Data Science</Link>
                                        </div>
                                        <div className="blog-single-share">
                                            <h4>Share:</h4>
                                            <SocialShare />
                                        </div>
                                    </div>
                                    <BlogNextPrev />
                                    <BlogComment />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="blog-single-right">
                                <BlogSearch />
                                <BlogRecentPost />
                                <BlogCategoryList />
                                <BlogGallery />
                                <BlogArchives />
                                <div className="sidebar-widget social-follow">
                                    <h4>Follow Us</h4>
                                    <div className="blog-widget-social">
                                        <SocialShare />
                                    </div>
                                </div>
                                <BlogTags />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSingleDetails;