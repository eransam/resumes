import React from 'react';
import teamMember2 from '../assets/img/team/v2.jpg'

const BlogAuthor = () => {
    return (
        <>
            <div className="blog-single-author">
                <div className="blog-author-img">
                    <img src={teamMember2} alt="teamMember2" />
                </div>
                <div className="blog-author-text">
                    <h4>Nusrat Fariha</h4>
                    <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BlogAuthor;