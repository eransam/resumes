import React from 'react';
import { toast } from 'react-toastify';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'
import teamv2 from '../assets/img/team/v2.jpg'
import teamv3 from '../assets/img/team/v3.jpg'
import teamv5 from '../assets/img/team/v5.jpg'

const BlogModal = () => {

    let handleComment = (event) => {
        event.preventDefault()
        event.target.reset()
        toast("Thanks for your Comment")
    }

    return (
        <>
            <div className="modal fade" id="blogSingleModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="blog-single-content">
                                <div className="thumb">
                                    <Link to="#"><img src={banner4} alt="Thumb" /></Link>
                                </div>
                                <div className="info">
                                    <div className="meta">
                                        <ul>
                                            <li>
                                                <Link to="#"><i className="ri-user-line"></i> Admin</Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i class="ri-chat-1-line"></i> 26 Comments</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.
                                    </p>
                                    <p>
                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                    <blockquote>
                                        Celebrated share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness.
                                    </blockquote>
                                    <p>
                                        Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                    </p>
                                    <h3>Conduct replied off led whether?</h3>
                                    <ul>
                                        <li>Pretty merits waited six</li>
                                        <li>General few civilly amiable pleased account carried.</li>
                                        <li>Continue indulged speaking</li>
                                        <li>Narrow formal length my highly</li>
                                        <li>Occasional pianoforte alteration unaffected impossible</li>
                                    </ul>
                                    <p>
                                        Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto?
                                    </p>
                                </div>
                            </div>

                            <div className="post-author">
                                <div className="thumb">
                                    <img src={teamv5} alt="Thumb" />
                                </div>
                                <div className="content">
                                    <h4><Link to="#">Nusrat Fariha</Link></h4>
                                    <p>
                                        Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening.
                                    </p>
                                </div>
                            </div>

                            <div className="post-tags share">
                                <div className="tags">
                                    <h4>Tags: </h4>
                                    <Link to="#">Algorithm</Link>
                                    <Link to="#">Data science</Link>
                                </div>
                                <ul className="social">
                                    <h4>Share:</h4>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="ri-facebook-line"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="ri-twitter-line"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="ri-linkedin-line"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="ri-pinterest-fill"></i></a>
                                        </li>
                                    </ul>
                                </ul>
                            </div>

                            <div className="post-pagination-area">
                                <div className="post-previous">
                                    <Link to="#">
                                        <div className="icon"><i className="ti-angle-double-left"></i></div>
                                        <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                    </Link>
                                </div>
                                <div className="post-next">
                                    <Link to="#">
                                        <div className="nav-title">Next Post <h5>Discovery incommode</h5></div>
                                        <div className="icon"><i className="ti-angle-double-right"></i></div>
                                    </Link>
                                </div>
                            </div>

                            <div className="blog-comments">
                                <div className="comments-area">
                                    <div className="comments-title">
                                        <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                        <div className="comments-list">
                                            <div className="comment-item">
                                                <div className="avatar">
                                                    <img src={teamv2} alt="Author" />
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        <h5>Micky James <span className="reply">
                                                            <Link to="#"><i className="fas fa-reply"></i> Reply</Link></span>
                                                        </h5>
                                                        <span>28 Feb, 2023</span>
                                                    </div>
                                                    <p>
                                                        Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="comment-item reply">
                                                <div className="avatar">
                                                    <img src={teamv3} alt="Author" />
                                                </div>
                                                <div className="content">
                                                    <div className="title">
                                                        <h5>Mickel Jones <span className="reply">
                                                            <Link to="#"><i className="fas fa-reply"></i> Reply</Link></span>
                                                        </h5>
                                                        <span>15 Mar, 2023</span>
                                                    </div>
                                                    <p>
                                                        Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint at the last satge of oportunatry.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comments-form">
                                        <div className="title">
                                            <h3>Leave a comments</h3>
                                        </div>
                                        <form onSubmit={handleComment} className="contact-comments">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input name="name" className="form-control" placeholder="Name *" type="text" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input name="email" className="form-control" placeholder="Email *" type="email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group comments">
                                                        <textarea className="form-control" placeholder="Comment *" required />
                                                    </div>
                                                    <div className="form-group full-width submit">
                                                        <button className="btn btn-animation dark border" type="submit">Post Comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogModal;