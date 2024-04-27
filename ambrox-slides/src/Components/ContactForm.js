import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    let handleMessage = event => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for Your Message")
    }

    return (
        <>
            <form onSubmit={handleMessage}>
                <div className="row">
                    <div className="col-lg-12">
                        <input type="text" name="name" placeholder='Name*' />
                    </div>
                    <div className="col-lg-6">
                        <input type="email" name="email" placeholder='Email*' />
                    </div>
                    <div className="col-lg-6">
                        <input type="number" name="number" placeholder='Number*' />
                    </div>
                    <div className="col-lg-12">
                        <textarea name="project" placeholder='Tell Us About Project *'></textarea>
                    </div>
                    <div className="col-lg-12">
                        <button className='btn btn-md circle btn-theme effect sent-btn'
                            type='submit'>Send Message</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;