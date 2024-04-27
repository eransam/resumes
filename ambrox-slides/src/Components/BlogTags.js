import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BlogTags = () => {
    return (
        <>
            <div className="sidebar-widget tags">
                <h4>Tags</h4>
                <div className="blog-widget-tags">
                    <ul>
                        <li><Link to="#">Fashion</Link>
                        </li>
                        <li><Link to="#">Education</Link>
                        </li>
                        <li><Link to="#">Nation</Link>
                        </li>
                        <li><Link to="#">Study</Link>
                        </li>
                        <li><Link to="#">Sealth</Link>
                        </li>
                        <li><Link to="#">Food</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogTags;