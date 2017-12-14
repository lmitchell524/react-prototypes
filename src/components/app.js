import React, {Component} from 'react';
import ContactList from './contact-list';
import ContactForm from './contact-form';
import contactData from '../data/contacts';


 class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData,
        }

        this.addContact= this.addContact.bind(this);
        this.sortContacts = this.sortContacts.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    sortContacts(){
        const newContacts = this.state.contacts.slice();

        let length = newContacts.length;
        for(let i = length-1; i>=0; i--){
            for(let x = 1; x <= i; x++) {
                if (newContacts[x - 1]['firstName'] > newContacts[x]['firstName']) {
                    let temp = newContacts[x - 1];
                    newContacts[x - 1] = newContacts[x];
                    newContacts[x] = temp;
                }
            }
        }

        this.setState({
            contacts: newContacts
        });
    }

    addContact(contact){
        const newContact = this.state.contacts.slice();  //creating a new array

        newContact.unshift(contact); //placing new contact into new array

        this.setState({
            contacts: newContact
        })
    }

    deleteContact(cardIndex){
        debugger;
        const newContacts = this.state.contacts.slice();

        newContacts.splice(cardIndex, 1);


        this.setState({
            contacts: newContacts,
        })
    }

     render(){
         return (
             <div className="container">
                 <h1 className="text-center">Address Book</h1>
                 <div className="row">
                     <div className="col-4"><ContactForm add={this.addContact} sort={this.sortContacts}/></div>
                     <ContactList contacts={this.state.contacts} delete={this.deleteContact}/>
                 </div>
             </div>
         );
     }
}

export default App;