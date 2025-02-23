import React from 'react';

const AcademicCalendar = () => {
  const calendarLinks = [
    { title: 'Academic Calendar - 2024-25 (Even Semester)', link: '/pdfs/even_semester.pdf' },
    { title: 'Academic Calendar - 2024-25 (Odd Semester)', link: '/pdfs/odd_semester.pdf' },
    { title: 'Complete Academic Calendar - 2024-25', link: '/pdfs/full_calendar.pdf' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      {/* Page Title */}
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-6">Academic Calendar</h2>

      {/* Calendar Links */}
      <div className="space-y-4">
        {calendarLinks.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <p className="text-gray-700 font-medium">{item.title}</p>
            <a
              href={item.link}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalendar;
