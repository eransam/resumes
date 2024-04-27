import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BlogArchives = () => {
    return (
        <>
            <div className="sidebar-widget archives">
                <h4>Archives</h4>
                <div className="blog-widget-archives">
                    <ul>
                        <li><Link to="#">Aug 2020</Link></li>
                        <li><Link to="#">Sep 2020</Link></li>
                        <li><Link to="#">Nov 2020</Link></li>
                        <li><Link to="#">Dec 2020</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogArchives;