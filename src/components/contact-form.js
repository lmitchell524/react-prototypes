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
        this.reset = this.reset.bind(this);
    }

    handleInputChange = (event) => {
        const {value, name} = event.target;

        const {form} = this.state;

        form[name] = value;         //selects correct 'key' in form and sets it to the constant 'value'

        this.setState ({form: {...form}});      //uses destruction to set form to a new object
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.add(this.state.form);

        this.reset();
    }

    reset = () => {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }


    render(){
        const {firstName, lastName, phone, email} = this.state.form;

        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <button className="btn btn-sm btn-outline-success mr-2" >Add Contact</button>
                <button className="btn btn-sm btn-outline-warning mr-2" type="button" onClick={this.reset}>Clear Form</button>
                <button className="btn btn-sm btn-outline-primary" type="button" onClick={this.props.sort}>Sort Contacts</button>
            </form>
        )
    }
}

export default ContactForm;