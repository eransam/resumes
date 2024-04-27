// Components
import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import Portfolio from '../Components/Portfolio';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Pricing from '../Components/Pricing';
import Brands from '../Components/Brands';
import Testimonial from '../Components/Testimonial';
import Available from '../Components/Available';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Portfolio />
            <About />
            <Resume />
            <Pricing />
            <Brands />
            <Testimonial />
            <Available />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;