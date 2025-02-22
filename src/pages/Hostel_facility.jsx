import React from 'react';

const HostelFacility = () => {
  const facilities = [
    { name: '24/7 Wi-Fi', icon: '📶' },
    { name: 'Mess & Dining', icon: '🍽️' },
    { name: 'Laundry Services', icon: '🧺' },
    { name: 'Badminton Court', icon: '🏸' }, // Fixed typo and incorrect icon
    { name: 'Gym & Sports', icon: '🏋️' },
    { name: 'Night Canteen', icon: '🌙' }, // Changed icon for better representation
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Hostel Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <div 
            key={index} 
            className="bg-orange-500 text-white p-4 rounded-lg flex flex-col items-center shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-3xl mb-2">{facility.icon}</div>
            <h3 className="text-lg font-semibold">{facility.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostelFacility;
