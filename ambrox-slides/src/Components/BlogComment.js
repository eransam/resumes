import React from 'react';
import { toast } from 'react-toastify';
import { HashLink as Link } from 'react-router-hash-link';
import teamMember3 from '../assets/img/team/v3.jpg'
import teamMember4 from '../assets/img/team/v4.jpg'

const BlogComment = () => {

    let handlePost = event => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for Your Comment")
    }

    return (
        <>
            <div className="blog-comment-area">
                <div className="blog-comment-title">
                    <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                </div>
                <div className="blog-comment">
                    <div className="blog-comment-avatar">
                        <img src={teamMember3} alt="teamMember3" />
                    </div>
                    <div className="blog-comment-text">
                        <div className="blog-comment-head">
                            <h5>Istiak Ahmed
                                <Link to="#">
                                    <i className="ri-reply-fill"></i>
                                    <span>Reply</span>
                                </Link>
                            </h5>
                            <span>28 Feb, 2022</span>
                        </div>
                        <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.</p>
                    </div>
                </div>
                <div className="blog-comment replay">
                    <div className="blog-comment-avatar">
                        <img src={teamMember4} alt="teamMember4" />
                    </div>
                    <div className="blog-comment-text">
                        <div className="blog-comment-head">
                            <h5>Hasan Sobuj
                                <Link to="#">
                                    <i className="ri-reply-fill"></i>
                                    <span>Reply</span>
                                </Link>
                            </h5>
                            <span>
                                15 Mar, 2022</span>
                        </div>
                        <p>Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint at the last satge of oportunatry.</p>
                    </div>
                </div>
            </div>
            <div className="blog-comment-form">
                <h3>Leave a comments</h3>
                <form onSubmit={handlePost}>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" name="" placeholder='Name*' />
                        </div>
                        <div className="col-lg-6">
                            <input type="email" name="" placeholder='Email*' />
                        </div>
                        <div className="col-lg-12">
                            <textarea name="" id="" placeholder='Comment*'></textarea>
                        </div>
                    </div>
                    <button className="btn btn-md circle btn-theme effect">Post Comment</button>
                </form>
            </div>
        </>
    );
};

export default BlogComment;