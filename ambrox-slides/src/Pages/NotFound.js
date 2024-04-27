import React from 'react';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import NotFoundText from '../Components/NotFoundText';
import Footer from '../Components/Footer';

const NotFound = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Not Found' />
            <NotFoundText />
            <Footer />
        </>
    );
};

export default NotFound;