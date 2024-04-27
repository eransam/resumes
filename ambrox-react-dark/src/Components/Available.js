import React from 'react';
import { Link } from 'react-scroll';
import shape16 from '../assets/img/shape/16-light.png'
import illustration2 from '../assets/img/illustration/2.png'

const Available = () => {
    return (
        <>
            <div className="work-available-area text-center box-layout bg-light default-padding">
                <div className="shape-right-top-mini">
                    <img src={shape16} alt="illustration" />
                </div>
                <div className="shape-illustration">
                    <img src={illustration2} alt="illustration" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="work-available">
                                <h2 className="title">I'm <strong>available</strong> for <br /> freelance work</h2>
                                <Link className="btn btn-md circle btn-theme smooth-menu" to="contact">Hire me now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Available;