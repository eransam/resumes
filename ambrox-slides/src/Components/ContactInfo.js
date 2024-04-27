import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info vt-md-mb-70">
                <ul>
                    <li className='contact-info-list'>
                        <div className="contact-info-icon">
                            <i className="ri-mail-line"></i>
                        </div>
                        <div className="contact-info-text">
                            <h5>Address</h5>
                            <p>22 Baker Street,</p>
                            <p>London, United Kingdom</p>
                        </div>
                    </li>
                    <li className='contact-info-list'>
                        <div className="contact-info-icon">
                            <i className="ri-map-pin-line"></i>
                        </div>
                        <div className="contact-info-text">
                            <h5>Phone</h5>
                            <p><a href="mailto:info@validtheme.com">info@validtheme.com</a></p>
                            <p><a href="mailto:support@softar.com">support@softar.com</a></p>
                        </div>
                    </li>
                    <li className='contact-info-list'>
                        <div className="contact-info-icon">
                            <i className="ri-headphone-line"></i>
                        </div>
                        <div className="contact-info-text">
                            <h5>Our Email</h5>
                            <p><a href="tel:+4733378901">+44-20-7328-4499</a></p>
                            <p><a href="tel:+4733378901">+99-34-8878-9989</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;