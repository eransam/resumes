import React from 'react';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import ResumeContent from '../Components/ResumeContent';
import Footer from '../Components/Footer';

const ResumePage = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Resume Page' />
            <ResumeContent />
            <Footer />
        </>
    );
};

export default ResumePage;