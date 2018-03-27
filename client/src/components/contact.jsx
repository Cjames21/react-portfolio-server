import React from 'react';
import ContactHeader from './contact/contact-header.jsx';
import ContactInfoContainer from './contact/contact-info-container.jsx';

import './contact/css/contact.css';

export default class ContactPage extends React.Component {

  render() {
    return (
      <div>
        <ContactHeader />
        <ContactInfoContainer />
      </div>

    );
  }

}
