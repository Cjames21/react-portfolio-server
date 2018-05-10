import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/body.css';
import TopBar from './components/topbar.js';
import Footer from './components/footer/footer.jsx';
import IndexPage from './components/indexPage/index-page.jsx';
import Contact from './components/contact.jsx';
import AboutMePage from './components/about-me-page.jsx';

export default class Body extends React.Component {

  render() {
    return (
      <div>
        <TopBar />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/about" component={AboutMePage} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
      );
  } // End of render
} // End of Body class

/*

  if(this.state.page === "index") {
    return (
      <div className="index">
        <TopBar onPageChange={this.handlePageChange} />
        <Header />
        <hr />
        <AboutMe />
        <hr />
        <SkillsOverview />
        <hr />
        <Footer />
      </div>
    );
  } else if(this.state.page === "about") {
    return (
      <div className="about-me">
        <TopBar onPageChange={this.handlePageChange} />
        <AboutMePage />
        <Footer />
      </div>
    )
  } else if(this.state.page === "contact") {
    return (
      <div className="contact-me">
        <TopBar onPageChange={this.handlePageChange} />
        <Contact />
        <hr />
        <Footer />
      </div>

    );
  }
*/
