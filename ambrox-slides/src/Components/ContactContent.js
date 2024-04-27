import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactContent = () => {
    return (
        <>
            <div className="contact-content vt-pt-120 vt-pb-120 vt-md-pt-60 vt-md-pb-30 vt-sm-pb-0 vt-sm-pt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact-from vt-md-mb-30">
                                <div className="form-title section-title">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactContent;