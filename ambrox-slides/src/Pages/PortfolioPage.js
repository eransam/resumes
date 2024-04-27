import React from 'react';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import PortfolioContent from '../Components/PortfolioContent';
import Footer from '../Components/Footer';

const PortfolioPage = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Portfolio Page' />
            <PortfolioContent />
            <Footer />
        </>
    );
};

export default PortfolioPage;