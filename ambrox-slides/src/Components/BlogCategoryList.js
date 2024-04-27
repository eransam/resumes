import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BlogCategoryList = () => {
    return (
        <>
            <div className="sidebar-widget category-list">
                <h4>Category List</h4>
                <ul>
                    <li><Link to="#">National <span>69</span></Link></li>
                    <li><Link to="#">Inter National <span>25</span></Link></li>
                    <li><Link to="#">Sports <span>18</span></Link></li>
                    <li><Link to="#">Magazine <span>37</span></Link></li>
                    <li><Link to="#">Health <span>12</span></Link></li>
                </ul>
            </div>
        </>
    );
};

export default BlogCategoryList;