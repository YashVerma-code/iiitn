import React, { useState } from 'react';

const categories = ["Faculty Notices", "Student Notices", "Latest Updates"];

const announcementsData = {
  "Student Notices": [
    { text: "Circular for Hostel Student", link: "#" },
    { text: "Notice For Mukhyamantri Medhavi Vidyarthi Yojana Scholarship", link: "#" },
    { text: "Schedule for Next Semester Fees Payment & Registration", link: "#" },
    { text: "Hostel Fees Extension Notice", link: "#" },
    { text: "Hostel fees Notice December 2024", link: "#" },
    { text: "NOTICE FOR NATIONAL SCHOLARSHIP PORTAL", link: "#" },
    { text: "Advertisement of National Fellowship for Higher Education of ST Students for the year 2023-24", link: "#" },
    { text: "Advisory on Eye Flu (Conjunctivitis) Prevention", link: "#" },
    { text: "REGARDING CHANGE OF BRANCH", link: "#" },
    { text: "Prescribed Application Format for Change of Branch Hindi Version", link: "#" },
    { text: "Notice for branch Change (2nd Year Student)", link: "#" },
    { text: "Hostel Admission Form (2,3 and 4th Year)", link: "#" },
    { text: "National Overseas Scholarship Scheme (NOS) for ST candidates", link: "#" },
    { text: "IMPORTANT NOTICE REGARDING HOSTEL BOYS ALLOTMENT", link: "#" },
    { text: "Notice for 4th Year", link: "#" },
    { text: "Notice MAHADBT Scholarship", link: "#" },
    { text: "Important Notice: For Extension of Last Date for B.Tech for 3rd, 5th and 7th Semester Fees Payment & Registration", link: "#" },
    { text: "Notice For Students", link: "#" },
    { text: "Important Notice Regarding Tele MANAS – a toll-free Mental Health Helpline", link: "#" },
    { text: "Important Notice for 2nd, 3rd, and 4th year students Regarding Instruction for Hostel leaving after End Semester Examination", link: "#" },
    { text: "Important Notice Regarding Boys Hostel Allotment", link: "#" },
    { text: "NO DUES CERTIFICATE FOR B.TECH", link: "#" },
    { text: "NOTICE FOR FINAL YEAR STUDENTS (2019 Batch)", link: "#" },
    { text: "Notice Regarding Boys Hostel Allotment", link: "#" },
    { text: "Notice of Schedule for Next Semester Fees Payment & Registration", link: "#" },
    { text: "Notice Regarding Changes in Official Institute Bank Account Number", link: "#" },
    { text: "NOTICE FOR MAHADBT PORTAL", link: "#" },
    { text: "Notices for online financial activity.", link: "#" },
    { text: "DOs and DON’Ts for addressing the menace of stray dogs within campus premises.", link: "#" },
    { text: "Important Notice - Hostel Fees Payment", link: "#" },
  ],
  "Faculty Notices": [
    { text: "Circular for Immovable property returns for the year 2024", link: "#" },
    { text: "Circular regarding change the name of MHRD to Ministry of Education", link: "#" },
    { text: "National Education Policy 2020", link: "#" },
    { text: "UGC Initiative", link: "#" },
    { text: "Innovation by Students : COVID - 19 Apps", link: "#" },
    { text: "Final Year Project thesis writing Guidelines", link: "#" },
    { text: "Online Exam & Grading Policy", link: "#" }
  ],
  "Latest Updates": [
    { text: "Recruitment Notice for the Post of Registrar", link: "#" },
    { text: "Schedule of Written Test and Interview admission Schedule Notification Winter 2024-2025", link: "#" },
    { text: 'Online Certificate Programme on "Foundations of Cybersecurity" From 25th March to 25th September, 2025', link: "#" },
    { text: "Revised PhD Admission Schedule Notification Winter 2024-2025", link: "#" },
    { text: 'Online Winter Faculty Development Programme on "Biometrics Security in the Generative AI Era" From 1st March to 12th March, 2025', link: "#" },
    { text: 'FDP on "Intricacies of Analog & Mixed Signal design" from 17th-28th Feb. 2025', link: "#" },
    { text: 'Online Winter Faculty Development Programme on "Quantum Computing" From February, 17th to 28th 2025', link: "#" },
    { text: "Five Months Online Certification Programme on Generative AI (GenAI)", link: "#" },
    { text: "Holiday list 2025", link: "#" },
    { text: "Notice Regarding Changes in Official Institute Bank Account Number", link: "#" },
    { text: "New Bus Timings", link: "#" },
    { text: "Notice for Accommodation on Paid Basis", link: "#" },
    { text: "NISP Circular", link: "#" },
    { text: "Fees Details Link", link: "#" }
  ]
};

const Announcement = () => {
  const [activeTab, setActiveTab] = useState("Student Notices");

  return (
    <div className="p-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-2 border-b border-gray-300">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === category ? "bg-red-600 text-white" : "bg-gray-900 text-white"
            } rounded-t-md`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Announcements List */}
      <div className="p-4 bg-white border border-gray-200 rounded-b-md shadow-md">
        <ul className="list-disc list-inside space-y-2">
          {announcementsData[activeTab]?.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-blue-600 hover:underline">
                {item.text}
              </a>
            </li>
          )) || <p className="text-gray-500">No announcements available.</p>}
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
