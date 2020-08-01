import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar.jsx";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import "./index.css";
import Footer from "./Footer.js";

const App = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/service" component={Service} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
