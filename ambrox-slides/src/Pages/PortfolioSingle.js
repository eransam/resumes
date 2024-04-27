import React from 'react';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import PortfolioDetails from '../Components/PortfolioDetails';
import Footer from '../Components/Footer';

const PortfolioSingle = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Portfolio Single' />
            <PortfolioDetails />
            <Footer />
        </>
    );
};

export default PortfolioSingle;