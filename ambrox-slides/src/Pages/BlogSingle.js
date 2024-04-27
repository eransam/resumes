import React from 'react';
import BlogSingleDetails from '../Components/BlogSingleDetails';
import Header from '../Components/Header';
import Breadcrumbs from '../Components/Breadcrumbs';
import Footer from '../Components/Footer';

const BlogSingle = () => {
    return (
        <>
            <Header />
            <Breadcrumbs pageTitle='Blog Single' />
            <BlogSingleDetails />
            <Footer />
        </>
    );
};

export default BlogSingle;