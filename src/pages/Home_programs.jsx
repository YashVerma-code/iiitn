import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cardDetails = [
  { image: "images/home/ece.jpg", title: "B-tech (CORE)", badge: "Computer Science and Engineering" },
  { image: "images/home/csam-banner-btech.jpg", title: "B-tech (ECE)", badge: "Electronics and Communication" },
  { image: "images/home/mtech-cse.jpg", title: "B-Tech (AI-ML)", badge: "Artificial Intelligence and Machine Learning" },
  { image: "images/home/ece-banner-btech.jpg", title: "B-Tech (IOT)", badge: "Internet of Things" },
  { image: "images/home/pg-diploma2.jpg", title: "B-Tech (HCIGT)", badge: "Human Computing and Gaming Technology" },
  { image: "images/home/pg-diploma2.jpg", title: "B-Tech (DS)", badge: "Data Science" }
];

const HomePrograms = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 780);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isVisible) {
      new Swiper(".card-wrapper", {
        modules: [Navigation, Pagination],
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Target the Read More button in the active slide
      const activeButton = document.querySelector(".swiper-slide-active .read-more");
      if (activeButton) {
        activeButton.dispatchEvent(new Event("click", { bubbles: true }));
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="main flex flex-col items-center">
        {/* Wrapping in a div with flex & center alignment */}
        <div className="line font-serif font-bold text-[40px] text-center">
          Programs
        </div>
        <div className="container swiper min-w-[90%] h-[500px]">
          <div className="card-wrapper h-auto">
            <div className="card-list swiper-wrapper h-auto">
              {cardDetails.map((card, index) => (
                <div
                  key={index}
                  className="card-item swiper-slide m-4 h-[450px] shadow-lg shadow-gray-500 relative flex flex-col items-center text-center group overflow-hidden rounded-lg"
                >
                  <a
                    href="#"
                    className="card-link h-[450px] rounded-lg flex flex-col items-center text-center w-full relative overflow-hidden"
                  >
                    <div className="relative w-full h-[250px] overflow-hidden">
                      <img
                        src={card.image}
                        alt="Card"
                        className="card-image w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                    <div className="text-container flex flex-col items-center text-center w-full mt-4">
                      <p className="badge font-bold text-2xl">{card.badge}</p>
                      <h2 className="card-title text-gray-500 font-bold text-base">
                        {card.title}
                      </h2>
                    </div>
                  </a>
                  <button
                    className="read-more border-2 border-gray-400 text-gray-400 px-4 py-2 rounded-full absolute bottom-5 left-1/2 transform -translate-x-1/2 transition-colors duration-300 hover:bg-[#3B6790] hover:text-white"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <div
              className="swiper-button-prev p-6 rounded-full bg-gray-700 bg-opacity-70"
              style={{
                "--swiper-navigation-size": "30px",
                "--swiper-navigation-top-offset": "50%",
                "--swiper-navigation-sides-offset": "30px",
                "--swiper-navigation-color": "var(--swiper-theme-color)",
                "--swiper-theme-color": "white"
              }}
            />
            <div
              className="swiper-button-next p-6 rounded-full bg-gray-700 bg-opacity-70"
              style={{
                "--swiper-navigation-size": "30px",
                "--swiper-navigation-top-offset": "50%",
                "--swiper-navigation-sides-offset": "30px",
                "--swiper-navigation-color": "var(--swiper-theme-color)",
                "--swiper-theme-color": "white"
              }}
            />
          </div>
        </div>
      </div>


    </>
  );
};

export default HomePrograms;
