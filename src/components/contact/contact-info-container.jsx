import React from 'react';
import ContactForm from './contact-form.jsx';
import ContactInfo from './contact-info.jsx';

export default class ContactInfoContainer extends React.Component {

  render() {
    return (
      <div className="row">
        <ContactInfo />
      </div>
    );
  }
}
