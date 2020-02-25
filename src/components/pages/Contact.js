import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
// import NavTabs from "./NavTabs"

function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        Tel: (516) 318-1366
        Email: babbott85@gmail.com
        Github: benabbott85
      </p>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
