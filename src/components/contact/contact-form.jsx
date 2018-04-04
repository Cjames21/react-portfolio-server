import React from 'react';


export default class ContactForm extends React.Component {

  constructor(){
    super();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fName: '',
      lName: '',
      phoneNumber: '',
      email: '',
      projType: '',
      projDesc: '',
    }
  }

  onChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit() {
    alert('button clicked');
    fetch('/email_author',
    {
      "fName": this.state.fName,
      "lName": this.state.lName,
      "phone": this.state.phoneNumber,
      "email": this.state.email,
      "projType": this.state.projType,
      "projDesc": this.state.projDesc,
    })
    .then((resp) => resp.json())
    .then(function(data) {
      alert(data);
    })
    .catch(function() {
      alert('Error! Something went wrong!');
    });
  }

  render() {
    return (
      <div className="large-6 small-12 columns">
        <div className="under-construction">
          <h2 className="under-construction-content">Terribly sorry, but it seems as though
            this component isn't quite functional yet
          </h2>
          <p className="under-construction-content">Please come back at a later date to make use of this contact form,
             or email me directly for design and client side development services</p>
        </div>
        <div className="form-side">
          <h1>Contact Form</h1>
          <p>Have an idea you'd like to send my way? Feel free to fill out this contact form
            and I'll be in touch with you as soon as possible!
          </p>
          <br />

            <form action="/email_user" className="contact-form" id="contact-form">
              <label htmlFor="fName">First Name: </label>
              <input value={this.state.fName} onChange={this.onChange} name="fName" type="text" />

              <label htmlFor="lName">Last Name: </label>
              <input value={this.state.lName} onChange={this.onChange} name="lName" type="text" />

              <label htmlFor="phone">Phone: </label>
              <input value={this.state.phone} onChange={this.onChange} name="phone" type="tel" />

              <label htmlFor="email">E-mail: </label>
              <input value={this.state.email} onChange={this.onChange} name="email" type="email" />

              <label htmlFor="projType">Project Type</label>
              <input value={this.state.projType} onChange={this.onChange} name="projType" type="text" />

              <label htmlFor="projDesc">Project Description: </label>
              <textarea value={this.state.projDesc} onChange={this.onChange} name="projDesc" type="text" placeholder="Please provide a brief description of the project you have in mind..." />

              <button id="submit" type="submit" name="submit" className="submit-button">Submit</button>
            </form>
        </div>

      </div>
    );
  }
}
