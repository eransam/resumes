import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import gallery1 from '../assets/img/gallery/1.jpg'
import gallery2 from '../assets/img/gallery/2.jpg'
import gallery3 from '../assets/img/gallery/3.jpg'
import gallery4 from '../assets/img/gallery/4.jpg'
import gallery5 from '../assets/img/gallery/5.jpg'
import gallery6 from '../assets/img/gallery/6.jpg'

const BlogGallery = () => {
    return (
        <>
            <div className="sidebar-widget gallery">
                <h4>Gallery</h4>
                <div className="blog-widget-gallery">
                    <Link to="#"><img src={gallery1} alt="gallery1" /></Link>
                    <Link to="#"><img src={gallery2} alt="gallery2" /></Link>
                    <Link to="#"><img src={gallery3} alt="gallery3" /></Link>
                    <Link to="#"><img src={gallery4} alt="gallery4" /></Link>
                    <Link to="#"><img src={gallery5} alt="gallery5" /></Link>
                    <Link to="#"><img src={gallery6} alt="gallery6" /></Link>
                </div>
            </div>
        </>
    );
};

export default BlogGallery;