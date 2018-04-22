import React from 'react';
import './css/social-buttons.css';

export default class SocialButtons extends React.Component {

  constructor() {
    super();

    this.sendTo = this.sendTo.bind(this);
    this.emailUser = this.emailUser.bind(this);
  }

  sendTo(event) {
    console.log(this.id);
    alert('Sorry, this didn"t seem to work, please try again later.');

    // Depending on event.target.
  }

  emailUser() {
    alert('Button clicked');

    // Either send user to the contact page, or open up a modal and let them
    // fill out that form
  }

  render() {
    return (
      <div className="row social-buttons">
        <ul className="menu">
          <li onClick={this.sendTo} id="twitter"><i className="fab fa-twitter"></i></li>
		      <li onClick={this.sendTo} id="linked-in"><i className="fab fa-linkedin"></i></li>
		      <li onClick={this.emailUser}><i className="fas fa-envelope"></i></li>
        </ul>
      </div>

    );
  }
}
