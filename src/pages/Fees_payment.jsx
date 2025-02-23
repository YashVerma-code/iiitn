import React from 'react';

const Fees_payment = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Fees Section */}
      <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-gray-800">FEES</h2>

      <div className="space-y-6">
        {/* Higher Semester Fees Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">For Higher Semester Fees Details</h3>
        </div>

        {/* Academic & Hostel Fees */}
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-medium">Academic Fees Details:</span>  
            <a href="#" className="text-blue-600 font-semibold hover:underline ml-2">
              Click Here <span className="text-red-500 animate-pulse">🆕</span>
            </a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Hostel Fees Details:</span>  
            <a href="#" className="text-blue-600 font-semibold hover:underline ml-2">
              Click Here <span className="text-red-500 animate-pulse">🆕</span>
            </a>
          </p>
        </div>

        {/* Payment Links */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-700">Payment Link</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <span className="font-medium text-gray-600">Academic:</span>  
              <a href="#" className="text-blue-600 font-semibold hover:underline ml-2">Click Here</a>
            </li>
            <li>
              <span className="font-medium text-gray-600">Hostel:</span>  
              <a href="#" className="text-blue-600 font-semibold hover:underline ml-2">Click Here</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fees_payment;
