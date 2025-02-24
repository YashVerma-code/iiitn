import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const PlacementHero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden p-4 bg-blue-700 text-white flex items-center"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu className="mr-2" />
        Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-200 p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/4 transition-transform duration-300 ease-in-out shadow-lg md:shadow-none`}
      >
        {/* Close Button (Visible on Mobile) */}
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="space-y-2 mt-4 md:mt-0">
          <li className="p-2 hover:bg-gray-300 cursor-pointer">Why Recruit?</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">Company Registration Link</li>
          <li className="p-2 bg-gray-400 text-white font-bold">Placement</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">Internship</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">Our Curriculum</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">FAQs</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">AIPC GUIDELINES</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">AIPC GUIDELINES ON PROCESS VIOLATION</li>
          <li className="p-2 hover:bg-gray-300 cursor-pointer">
            Internship and Placement Policy of IIT Kharagpur 2024-25
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 md:p-8">
        <h1 className="text-3xl font-bold text-blue-700">PLACEMENT</h1>
        <p className="mt-4 font-semibold">About Us</p>
        <p className="mt-2">
          At IIITN, the Training & Placement Office is of strategic importance. It takes various initiatives to transform
          the students into a smart workforce. The T&P Office believes in providing quality internships and placements to
          all its students.
        </p>
        <p className="mt-4">
          Consistent efforts are made to collaborate with leading organizations for joint technological development and
          research initiatives, internships, and placements. It acts as a Resource Centre, where students get information
          about various training programs, online courses, internships, and projects at various Govt Organizations in India.
        </p>
        <p className="mt-4">
          The T&P office is headed by the Sr. Office Associate T&P, Dr. Meera Jgadale, and supported by faculty In-charge
          Dr. Paritosh Peshwe and student representatives.
        </p>
        <p className="mt-4 font-bold text-blue-700">IIIT Nagpur Training & Placement Brochure Download</p>

        <h2 className="mt-4 text-xl font-bold">Campus Recruitment Training</h2>
        <p className="mt-2">
          Campus Recruitment Training is a crucial aspect of the placement preparations. Students at IIITN are critically
          trained on aspects like Aptitude, Group Discussions, and Interviews. Students are encouraged to take up
          entrepreneurship through interaction with founders of startups.
        </p>
      </div>
    </div>
  );
};

export default PlacementHero;
