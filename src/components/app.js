import React from 'react';
import ContactList from './contact-list';
import ContactForm from './contact-form';



export default () => {
    return (
        <div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <div className="col-4"><ContactForm/></div>
                <ContactList/>
            </div>
        </div>
    );
}
