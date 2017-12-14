import React from 'react';
import ContactCard from './contact-card';

 function ContactList(props){

    const list = props.contacts.map((item, index) => {
        return(
            <ContactCard delete={props.delete} cardIndex={index} key={index} contact={item}/>
        )
    });

    return(
        <div className="col-8">
            <div className="row">{list}</div>
        </div>
    )
}

export default ContactList;