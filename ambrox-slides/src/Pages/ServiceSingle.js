import React from 'react';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import ServiceDetails from '../Components/ServiceDetails';
import Footer from '../Components/Footer';

const ServiceSingle = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Service Single' />
            <ServiceDetails />
            <Footer />
        </>
    );
};

export default ServiceSingle;