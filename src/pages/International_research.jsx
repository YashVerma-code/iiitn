import React from "react";

const researchCollaborations = [
  {
    title: "International Research Collaboration",
    description:
      'Dr. Charu Goel is working on "Invariant Nonnegative Forms vs Sums of Squares" and "Pythagoras numbers and Polynomial identities" with various international researchers.',
    researchers: [
      { name: "Prof. Dr. Salma Kuhlmann", university: "University of Konstanz, Germany" },
      { name: "Prof. Dr. Cordian Riener", university: "University of Tromso, Norway" },
      { name: "Prof. Dr. Bruce Reznick", university: "University of Illinois at Urbana Champaign, U.S.A." },
      { name: "Prof. Dr. Karim Becher", university: "University of Antwerp, Belgium" },
    ],
  },
];

const mouAgreements = [
  "IIIT Nagpur signed the MoU with E-Spin Nanotech Pvt Ltd., IIT Kanpur on 27th January 2021.",
  "IIIT Nagpur signed the MoU with Advance Tech India Pvt. Ltd., Punjab, India on 23rd December 2020.",
  "MoU signed between Military College of Telecommunication Engineering MCTE and IIIT Nagpur for PG Diploma - 2020.",
  "MoU between AIIMS, Nagpur and IIIT, Nagpur – 2020.",
  "IIITN signed an MOU with AIIMS, Nagpur for Research Collaboration and need-based projects.",
  "IIITN signed an MOU with IIM Nagpur Foundation for Entrepreneurship Development (InFED).",
  "IIITN signed an MOU with Datta Meghe Institute of Medical Sciences for research collaboration.",
];

const internships = [
  { name: "Vaibhav H. Agasti", course: "Final Year CSE", place: "Muma College of Business, University of South Florida" },
  { name: "Kartik W. Kinge", course: "Final Year ECE", place: "Fujitsu Ltd, Japan" },
  { name: "Sahil S. Deshmukh", course: "Final Year ECE", place: "Ecole Centrale Supelec, Paris" },
];

const InternationalResearch = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        INTERNATIONAL RESEARCH COLLABORATION
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-8">
        IIIT Nagpur encourages students and staff to establish research
        collaborations worldwide through MoUs, internships, and exchange
        programs.
      </p>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Research Collaboration Section */}
        {researchCollaborations.map((research, index) => (
          <section key={index} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{research.title}</h2>
            <p className="text-gray-700">{research.description}</p>
            <ul className="mt-4 space-y-2">
              {research.researchers.map((person, idx) => (
                <li key={idx} className="text-gray-600">
                  🔹 {person.name}, {person.university}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* MoU Agreements Section */}
        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Memorandum of Understanding (MoU)</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {mouAgreements.map((mou, index) => (
              <li key={index} className="text-gray-600">🔹 {mou}</li>
            ))}
          </ul>
        </section>

        {/* International Internship Section */}
        <section className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Internships</h2>
          <ul className="space-y-3">
            {internships.map((intern, index) => (
              <li key={index} className="text-gray-600">
                🔹 <span className="font-semibold">{intern.name}</span> ({intern.course}) - {intern.place}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InternationalResearch;
