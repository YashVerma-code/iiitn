import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const studentReviews = [
  { image: "images/home/student1.jpeg", name: "John Doe", review: "My college experience was amazing! The faculty and resources were top-notch." },
  { image: "images/home/student2.jpeg", name: "Jane Smith", review: "I gained invaluable skills and made lifelong friends. Highly recommend!" },
  { image: "images/home/student3.jpeg", name: "Alex Brown", review: "The best decision of my life was joining this college. Excellent placements!" },
  { image: "images/home/student4.jpg", name: "Emily White", review: "Great campus, supportive professors, and a wonderful learning environment." },
  { image: "images/home/student5.jpeg", name: "Michael Lee", review: "The projects and internship opportunities helped me shape my career.  " }
];

const StudentReview = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 780);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isVisible) {
      new Swiper(".testimonial-wrapper", {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
        breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1024: { slidesPerView: 3, spaceBetween: 30 } },
      });
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-4xl font-bold text-center mb-6">Alumni Testimonials</h2>
      <div className="container swiper w-[85%]">
        <div className="testimonial-wrapper">
          <div className="testimonial-list swiper-wrapper">
            {studentReviews.map((testimonial, index) => (
              <div key={index} className="testimonial-item swiper-slide bg-gray-50 shadow-md p-6 rounded-xl flex flex-col items-center text-center relative overflow-hidden mx-4">
                <div className="relative w-[100px] h-[100px] rounded-full border-4 border-orange-500 overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <p className="italic text-gray-700 mt-4 px-4">“{testimonial.review}”</p>
                <h3 className="text-xl font-semibold mt-4 text-gray-900">{testimonial.name}</h3>
                <div className="flex items-center text-orange-500 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-4"></div>
          <div className="swiper-button-prev bg-gray-700 p-6 rounded-full text-white"></div>
          <div className="swiper-button-next bg-gray-700 p-6 rounded-full text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default StudentReview;
