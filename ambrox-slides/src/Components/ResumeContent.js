import React from 'react';
import PersonalInfo from './PersonalInfo';

const ResumeContent = () => {
    return (
        <>
            <div className="resume-content vt-pt-120 vt-pb-90 vt-md-pt-80 vt-md-pb-10 vt-sm-pb-0 vt-sm-pt-40">
                <div className="container">
                    <div className="row">
                        <PersonalInfo />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeContent;