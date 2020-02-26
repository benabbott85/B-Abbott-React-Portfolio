import React from "react";
// import NavTabs from "./NavTabs"
import "../../style.css";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div class="wrapper">
        <div class="wrapper">
          <a href="https://benabbott85.github.io/Project-1/">
            {" "}
            <img className="portfolioimg" src="logo2.png" alt="easicuisi"></img>
          </a>
           
           <a href="https://benabbott85.github.io/B-Abbott-HW-5/"><img className="dayplanner"src="https://bwprintworks.com/39-large_default/small-one-week-view-day-planner-8-5-x-5-5.jpg" alt="dayplanner"></img>
           </a>

           <a href= "https://lit-shelf-33451.herokuapp.com/"><img className="notetaker" src="https://jeffshore.com/wp-content/uploads/2016/07/Taking-Notes.jpg" alt="notetaker"></img></a>

           <a href="https://github.com/benabbott85/B-Abbott-HW-8"><img className="developerprofile" src="https://cdn-images-1.medium.com/max/1600/1*137RurhEOkjDyUGWQJhvAg.png" alt="developerprofile"></img></a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
