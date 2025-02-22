import React, { useState, useRef } from "react";
import { FaUniversity, FaGlobe, FaBookOpen, FaFlask, FaUsers, FaLaptopCode, FaTheaterMasks, FaBrain, FaFlag } from "react-icons/fa";

const sections = [
  {
    title: "ADMISSION",
    content: [
      "Established by MHRD, Govt of Maharashtra, and Industry partners.",
      "Declared as Institution of National Importance by Act of Parliament.",
      "Admissions happen through JoSAA. Only top 2% candidates taking JEE Mains Exam make it to IIITN.",
    ],
    icon: <FaUniversity className="text-3xl text-blue-600" />,
  },
  {
    title: "INDUSTRY ACADEMIA COLLABORATION",
    content: [
      "Tie-up with Tata Consultancy Services Ltd as Industry Partner.",
      "MoU with ESIEE Paris for exchange programs.",
    ],
    icon: <FaGlobe className="text-3xl text-green-600" />,
  },
  {
    title: "CURRICULUM",
    content: [
      "Industry-relevant dynamic curriculum designed by Board of Studies.",
      "Core subjects are incorporated from the 1st semester.",
      "Choice Based Credit System gives an option to students to choose subjects of their choice.",
      "Option to pursue credit-based Online Certification Courses from Coursera, Udacity, Google.",
      "Credit-based mandatory industry internship for full semester in final year B.Tech.",
      "Lecture series delivered by Tech experts from IT & Electronics industry.",
      "IT Workshops on Data Structures, Python, HTML, Matlab, Robotics, Machine Learning, etc.",
    ],
    icon: <FaBookOpen className="text-3xl text-yellow-600" />,
  },
  {
    title: "RESEARCH ENVIRONMENT",
    content: [
      "Research in Deep Learning, Machine Learning, Parallel Computing, IoT, Signal Processing, and Nanotechnology.",
    ],
    icon: <FaFlask className="text-3xl text-red-600" />,
  },
  {
    title: "STUDENTS PUBLICATIONS",
    content: [
      "IIITN students have published over 5500+ research papers in top-tier conferences and journals.",
    ],
    icon: <FaUsers className="text-3xl text-purple-600" />,
  },
  {
    title: "Technical Clubs",
    content: [
      "#Ack-Z: Ethical hacking club.",
      "United Gamers: Competitive gaming platform.",
      "DotSlash: Coding & ML club.",
      "REAP: Research club for tech-driven innovations.",
    ],
    icon: <FaLaptopCode className="text-3xl text-orange-600" />,
  },
  {
    title: "Cultural Clubs",
    content: [
      "Music Club: Showcasing student talent.",
      "Talartsdy: The Art club promoting creativity.",
      "Beats Spark: Dance club for diverse dance forms.",
    ],
    icon: <FaTheaterMasks className="text-3xl text-pink-600" />,
  },
  {
    title: "Academics & Research Clubs",
    content: [
      "REAP: Helps students explore research interests.",
      "The 7C Club: Enhances public speaking, confidence, and leadership skills.",
    ],
    icon: <FaBrain className="text-3xl text-indigo-600" />,
  },
  {
    title: "Flagship Annual Events @ IIITN",
    content: [
      "ABHIVYAKTI – The Annual Cultural Festival.",
      "TANTRAFIESTA – National Level Technical Event by IIITN.",
    ],
    icon: <FaFlag className="text-3xl text-gray-600" />,
  },
];

const PlacementRecruit = () => {
  const sectionRefs = useRef([]);

  // Function to handle smooth scrolling
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
        Why Recruit from IIIT Nagpur?
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 rounded-xl shadow-md cursor-pointer hover:bg-gray-200 transition"
            onClick={() => scrollToSection(index)}
          >
            <div className="flex items-center gap-3">
              {section.icon}
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="mt-10">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="bg-white shadow-lg p-5 rounded-lg mt-4 border border-gray-300"
          >
            <h2 className="text-xl font-bold text-white bg-indigo-700 p-2 rounded">{section.title}</h2>
            <ul className="list-disc pl-5 mt-2">
              {section.content.map((point, i) => (
                <li key={i} className="text-gray-700">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementRecruit;
