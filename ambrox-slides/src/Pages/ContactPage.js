import React from 'react';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import ContactContent from '../Components/ContactContent';
import Footer from '../Components/Footer';

const ContactPage = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Contact Us' />
            <ContactContent />
            <Footer />
        </>
    );
};

export default ContactPage;