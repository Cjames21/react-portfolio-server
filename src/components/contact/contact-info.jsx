import React from 'react';
import Footer from '../footer/footer.jsx';

export default class ContactInfo extends React.Component {

  render() {
    return (
      <div className="large-6 small-12 columns contact-info">
        <h1>Contact Information</h1>
        <p>If you have any other questions, or were looking to get in touch outside of this website,
          here's my contact information.</p>

        <Footer  />
      </div>
    );
  }
}
