import React, { useState } from 'react';

const HostelGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', description: '', bgImage: '' });

  const openPopup = (title, description, bgImage) => {
    setPopupContent({ title, description, bgImage });
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-10 bg-white min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mess & Canteen */}
        <div className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold">Mess & Canteen</h3>
          <p className="text-gray-600 text-sm mt-2">Our hostel mess offers hygienic and nutritious food for students.</p>
          <button
            className="mt-4 px-5 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition"
            onClick={() =>
              openPopup(
                'Mess & Canteen',
                'Our hostel mess provides healthy meals prepared with strict hygiene standards. The canteen serves a variety of snacks and beverages throughout the day.',
                'images/home/mess.jpg'
              )
            }
          >
            READ MORE
          </button>
        </div>

        {/* Image cards */}
        <img
          src="images/Hostel/gym.jpg"
          alt="Gym"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:brightness-75"
        />
        <img
          src="images/Hostel/badminton.jpg"
          alt="Badminton Court"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:brightness-75"
        />
        <img
          src="images/home/mess.jpg"
          alt="Mess Area"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:brightness-75"
        />
        <img
          src="images/Hostel/table-tenis.jpg"
          alt="Table Tennis"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:brightness-75"
        />

        {/* Gym & Sports Facilities */}
        <div className="bg-gray-100 p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl font-bold">Gym & Sports Facilities</h3>
          <p className="text-gray-600 text-sm mt-2">Stay fit with our fully equipped gym and sports facilities.</p>
          <button
            className="mt-4 px-5 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition"
            onClick={() =>
              openPopup(
                'Gym & Sports Facilities',
                'Our hostel has a state-of-the-art gym, badminton courts, table tennis, and other sports facilities to ensure students maintain a healthy lifestyle.',
                'images/Hostel/gym.jpg'
              )
            }
          >
            READ MORE
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className="relative bg-cover bg-center w-full max-w-lg h-[60vh] rounded-lg shadow-lg flex justify-center items-center transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${popupContent.bgImage})` }}
          >
            {/* Hidden text that appears on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-4">{popupContent.title}</h2>
              <p className="text-white">{popupContent.description}</p>
              <button
                className="mt-6 px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelGallery;
