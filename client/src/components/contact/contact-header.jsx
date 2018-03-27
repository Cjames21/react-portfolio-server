import React from 'react';


export default class ContactHeader extends React.Component {

  render() {
    return (
      <div className="row desktop-header">
        <h1>Great service is just a click or a call away!</h1>
        <hr />
        <br />
        <div className="large-4 small-12 columns contact-header-container">
          <h1><i className="fa fa-user"></i></h1>
          <p>UI/UX</p>
          <hr />
        </div>
        <div className="large-4 small-12 columns contact-header-container">
          <h1><i className="fa fa-mobile"></i></h1>
          <p>Responsive</p>
          <hr />
        </div>
        <div className="large-4 small-12 columns contact-header-container">
          <h1><i className="fab fa-react"></i></h1>
          <p>Modern</p>
          <hr />
        </div>
      </div>
    );
  }
}
