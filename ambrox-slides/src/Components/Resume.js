import React from 'react';
import SlidesHeader from './SlidesHeader';
import PersonalInfo from './PersonalInfo';

const Resume = () => {
    return (
        <>
            <div className="resume-area section-area bg-cover">
                <SlidesHeader />
                <div className="container">
                    <div className="row align-items-center vt-mt-100">
                        <div className="col-lg-1">
                            <div className="resume-title section-title">
                                <h2 className='rotate-title'>Resume</h2>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <PersonalInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;