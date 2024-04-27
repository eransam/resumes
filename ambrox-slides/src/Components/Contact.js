import React from 'react';
import SlidesHeader from './SlidesHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {

    return (
        <>
            <div className="contact-area section-area bg-cover">
                <SlidesHeader />
                <div className="container">
                    <div className="row align-items-center vt-mt-100">
                        <div className="col-lg-7">
                            <div className="contact-from vt-md-mb-30">
                                <div className="form-title section-title">
                                    <h2>Let's Talk</h2>
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

export default Contact;