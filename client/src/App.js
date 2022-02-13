import React from 'react';
import Home from './Home';
import Appointment from './Appointment';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact'
import Record from './Record';
import Validate from './Validate';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
      <Navbar />
        <Switch>
          <Route path="/record">
            <Record />
          </Route>
          <Route path="/validation">
            <Validate />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
      </Router>




    </>
  );
};