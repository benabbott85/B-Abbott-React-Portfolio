import React from "react";
// import NavTabs from "./NavTabs"
import "../../style.css";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div class="wrapper">
        <div class="wrapper1">

          <div class="easicuisi">
          <a href="https://benabbott85.github.io/Project-1/">
            <img className="portfolioimg" src="https://static.makeuseof.com/wp-content/uploads/2019/07/Best-Meal-Planning-apps-mealime.png" alt="easicuisi"></img>
          </a>
          <h1 class="header1"> EasiCuisi</h1>
          <p class="para1">- Project designed for user to be able to search for recipes based on protein type, serving size, 
          <br></br>
          and cook time desired.
          <br></br>
          - Upon entering search criteria, user will be given results on modals based upon the API search.
          </p>
          <p class="para3">- Languages used: HTML, CSS, JQuery, APIs</p>
          
          <p class="para4">- I was responsible for the APIs to be used as well as coordinating the JQuery code writing </p>
          
         
          </div>

          <div class="allocations">
          <a href="https://limitless-refuge-47363.herokuapp.com/">
            <img className="dayplanner" src="https://i.pinimg.com/originals/f8/be/22/f8be222cc55ac83ce675b5d44a6fb073.png" alt="easicuisi"></img>
          </a>
          <h1 class="header2"> AlLocations</h1>
          <p class="para1">- Project designed for users to be able to store information for an upcoming trip in one  
          <br></br>
          centralized place
          <br></br>
          - On landing page, user will be able to target upcoming trip, or future trips being planned
          </p>
          <p class="para3">- Languages used: Node, Express, Handebars, Sequelize, Materialize</p>
          
          <p class="para4">- I was responsible for the back end work on this project. Once the front end was wired up,
          <br></br>
          I was tasked with wiring up the server to be able to store user data that could be called later
             </p>
          
         
          </div>

          
           {/* <a href= "https://lit-shelf-33451.herokuapp.com/"><img className="notetaker" src="https://jeffshore.com/wp-content/uploads/2016/07/Taking-Notes.jpg" alt="notetaker"></img></a>

           <a href="https://github.com/benabbott85/B-Abbott-HW-8"><img className="developerprofile" src="https://cdn-images-1.medium.com/max/1600/1*137RurhEOkjDyUGWQJhvAg.png" alt="developerprofile"></img></a> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
