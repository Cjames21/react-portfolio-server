import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/body.css';
import TopBar from './components/top-bar/topbar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/indexPage/index-page.jsx';
import Contact from './components/contact.jsx';
import AboutMePage from './components/about-me-page.jsx';
import Showcase from './components/showcase/showcase-container.jsx';

export default class Body extends React.Component {

  render() {
    return (
      <div>
        <TopBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={AboutMePage} />
          <Route path='/contact' component={Contact} />
          <Route path='/projects' component={Showcase} />
        </Switch>
        <Footer />
      </div>
    );
  } // End of render
} // End of Body class
