import React from "react";
// import About from "./About";
import Home_notice from "./Home_notice";
import Home_events from "./Home_events";
import Home_programs from "./Home_programs";
import Home_counter from "./Home_counter";
import Home_life from "./Home_life";
import Home_about from "./Home_about";
import Home_research from "./Home_research";
// import Home_testimonial from "./Home_testimonial";
import Student_review from "./Student_review";

const Home = () => {
  return (
    <>
      
     <Home_about/>
     <Home_research/>
     <Home_life/>
     <Home_counter/>
      {/* <Home_notice /> */}
      <Home_events/>
      <Home_programs/>
     {/* <Home_testimonial/> */}
     <Student_review/>
    </>
  );
};

export default Home;