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
import Typewriter from "typewriter-effect";
import Footer from "./../components/footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-auto relative">
      <video
        src="/home/college_tour.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover"
      ></video>
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-white z-20 p-4 w-full h-screen bg-black bg-opacity-30"> 
        <h1 className="text-3xl md:text-6xl font-bold text-blue-600 whitespace-normal px-2 pt-10">
          भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
        </h1>
        <h2 className="text-lg md:text-3xl font-semibold text-gray-800 mt-2">
          Indian Institute of Information Technology, Nagpur
        </h2>
        <p className="hidden font-bold md:block text-sm md:text-lg text-orange-600 mt-2">
          An Institution of National Importance By An Act of Parliament
        </p>
        <div className="font-semibold mt-4 text-lg md:text-3xl text-blue-800">
          <Typewriter
            options={{
              strings: ["Welcome to IIIT Nagpur", "Explore Our Campus", "Join the Innovation"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      
      <div className="flex-grow relative text-black p-10">
        <Home_about/>
     <Home_research/>
     <Home_life/>
     <Home_counter/>
      {/* <Home_notice /> */}
      <Home_events/>
      <Home_programs/>
     {/* <Home_testimonial/> */}
     <Student_review/>
        </div>
      
      <Footer />
    </div>
  );
};

export default Home;
