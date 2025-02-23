import React from 'react';

const conferencesData = new Map([
  [
    1,
    {
      title: 'Foundations of Cybersecurity',
      date: 'March 25 - September 25, 2025',
      department: 'Dept. of Computer Science and Engineering, IIIT Nagpur',
      brochure: '#',
      registration: '#',
      contact: 'Dr. Shishupal Kumar',
    },
  ],
  [
    2,
    {
      title: 'Biometrics Security in the Generative AI Era',
      date: 'March 1 - March 12, 2025',
      department: 'IIIT Nagpur & E&ICT Academy, PDPM IIITDM Jabalpur',
      brochure: '#',
      registration: '#',
      contact: 'Dr. Nishat Ansari, Dr. Milind Penurkar',
    },
  ],
  [
    3,
    {
      title: 'Intricacies of Analog & Mixed Signal Design',
      date: 'February 17 - February 28, 2025',
      department: 'Electronics & Communication Engineering, IIIT Nagpur',
      brochure: '#',
      registration: '#',
      contact: 'Dr. Paritosh Pashwe, Dr. Parul Sahare',
    },
  ],
  [
    4,
    {
      title: 'Quantum Computing',
      date: 'February 17 - February 28, 2025',
      department: 'Computer Science & Engineering, IIIT Nagpur',
      brochure: '#',
      registration: '#',
      contact: 'Dr. Jitendra Tembhurne, Dr. Tausif Diwan',
    },
  ],
]);

const Conferences = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Conferences, Workshops & Certifications</h1>
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        {Array.from(conferencesData.values()).map((event, index) => (
          <div
            key={index}
            className="p-4 border-b last:border-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
              <p className="text-gray-600 text-sm">📅 {event.date}</p>
              <p className="text-gray-600 text-sm">🏛 {event.department}</p>
              <p className="text-blue-600 text-sm">📞 Contact: {event.contact}</p>
            </div>
            <div className="flex gap-3">
              <a
                href={event.brochure}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                📄 Brochure
              </a>
              <a
                href={event.registration}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                📝 Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
