import React from 'react';

const TimeTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-6">Curriculum</h2>

      {/* Curriculum Links */}
      <div className="space-y-2 mb-6">
        <a href="/curriculum/cse" className="text-blue-600 hover:underline font-semibold block">
          B. Tech CSE
        </a>
        <a href="/curriculum/ece" className="text-blue-600 hover:underline font-semibold block">
          B. Tech ECE
        </a>
        <a href="/curriculum/phd" className="text-blue-600 hover:underline font-semibold block">
          PhD
        </a>
      </div>

      {/* Time Table Section */}
      <div className="bg-blue-900 text-white font-bold text-lg p-3 rounded-t-lg text-center">
        Time Table of B. Tech.
      </div>
      <div className="border border-gray-300 rounded-b-lg p-4 bg-gray-100">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-700 text-lg mb-3">B. Tech (All Semester)</h3>
          <div className="space-y-2">
            <a href="/timetable/slot" className="text-blue-600 hover:underline block">
              Click Here - Slot
            </a>
            <a href="/timetable/classroom-occupancy" className="text-blue-600 hover:underline block">
              Click Here - Classroom Occupancy
            </a>
            <a href="/timetable/lab-occupancy" className="text-blue-600 hover:underline block">
              Click Here - Lab Occupancy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
