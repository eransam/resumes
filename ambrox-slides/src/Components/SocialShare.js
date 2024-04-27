import React from 'react';

const SocialShare = () => {
    return (
        <>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className='facebook'><i className="ri-facebook-fill"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className='twitter'><i className="ri-twitter-fill"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className='linkedin'><i className="ri-linkedin-fill"></i></a>
                </li>
                <li>
                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" className='pinterest'><i className="ri-pinterest-fill"></i></a>
                </li>
            </ul>
        </>
    );
};

export default SocialShare;