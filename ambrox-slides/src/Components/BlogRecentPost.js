import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import gallery1 from '../assets/img/gallery/1.jpg'
import gallery2 from '../assets/img/gallery/2.jpg'
import gallery3 from '../assets/img/gallery/3.jpg'

const BlogRecentPost = () => {
    return (
        <>
            <div className="sidebar-widget blog-recent-post">
                <h4>Recent Post</h4>
                <div className="recent-post-wrapper">
                    <div className="recent-post-thumb">
                        <img src={gallery1} alt="gallery1" />
                    </div>
                    <div className="recent-post-text">
                        <span>12 Feb, 2020</span>
                        <Link to="#">Commanded household smallness delivered.</Link>
                    </div>
                </div>
                <div className="recent-post-wrapper">
                    <div className="recent-post-thumb">
                        <img src={gallery2} alt="gallery2" />
                    </div>
                    <div className="recent-post-text">
                        <span>05 Jul, 2022</span>
                        <Link to="#">Future Plan & Strategy for Consutruction</Link>
                    </div>
                </div>
                <div className="recent-post-wrapper">
                    <div className="recent-post-thumb">
                        <img src={gallery3} alt="gallery3" />
                    </div>
                    <div className="recent-post-text">
                        <span>29 Aug, 2020</span>
                        <Link to="#">Melancholy particular devonshire alteration</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogRecentPost;