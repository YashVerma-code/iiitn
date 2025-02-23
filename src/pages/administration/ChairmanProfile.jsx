import React from "react";

const ChairmanProfile = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Profile Image */}
      <img
        src="/path-to-image.jpg" 
        alt="Shri Ravi Sharma"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900">Shri Ravi Sharma</h2>
        <h3 className="text-lg font-semibold text-blue-700">
          Chairman, BoG IIIT Nagpur
        </h3>
        <a
          href="mailto:chairman@iiitn.ac.in"
          className="text-sm text-blue-500 hover:underline"
        >
          chairman[at]iiitn[dot]ac[dot]in
        </a>

        <p className="mt-4 text-gray-700 leading-relaxed">
          An accomplished former CEO, Ravi Sharma is now a mentor & philanthropist with a mission of
          “Spreading Goodness” by supporting initiatives towards Sustainable Society, inclusive
          Education and Spirituality.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed">
          A distinguished IIT Roorkee alum and one of the youngest CEOs of Telecom MNCs in India, he
          has led companies like Alcatel Lucent South Asia, Videocon Telecom, and Adani Power.
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed">
          Ravi also established the Subodhanand Foundation to spread the knowledge of Vedas and
          actively leads the IIT Alumni Council as its President.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
            Technology & Infrastructure
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
            Philanthropy
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
            Leadership
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChairmanProfile;
