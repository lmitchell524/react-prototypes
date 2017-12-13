import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;

        const {form} = this.state;

        form[name] = value;         //selects correct 'key' in form and sets it to the constant 'value'

        this.setState ({form: {...form}});      //uses destruction to set form to a new object
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('handled submit called', this.state.form);
    }


    render(){
        const {firstName, lastName, phone, email} = this.state.form;

        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <button>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;