import React, { useState, useRef, useEffect } from 'react';

const Hostel = () => {
  const listRef = useRef(null);
  const announcements = [
    'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of Server with Tape Library →',
    'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of RTX 6000 (Ada) GPU Server →',
    'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
    'RFP for Planning, Designing, Architecture and consultancy for “Construction of Multi-storied Boys Hostel Tower Block” in IIIT-H Campus at Gachibowli, Hyderabad →',
    'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →'
  ];
  const campusNews = ['News Item 1', 'News Item 2', 'News Item 3'];
  const events = ['Event 1', 'Event 2', 'Event 3'];

  const autoScroll = (ref) => {
    if (ref.current) {
      setInterval(() => {
        ref.current.scrollBy({ top: 40, behavior: 'smooth' });

        if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
          ref.current.scrollTop = 0; // Reset scroll when it reaches the bottom
        }
      }, 2000);
    }
  };

  useEffect(() => {
    autoScroll(listRef);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-300">
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img 
          src="images/Hostel/hostel1.JPG" 
          alt="Hostel" 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Welcome To</h1>
          <h2 className="text-white text-3xl font-semibold">Hostel Block</h2>
        </div>
      </div>

      {/* Information Boxes */}
      <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Campus News Section */}
        <div className="min-h-[40vh] bg-[#23485A] text-white p-6 rounded-xl flex flex-col">
          <h2 className="text-3xl font-bold mb-4 sticky top-0bg-[#23485A] py-2 z-10">Campus News</h2>
          <ul ref={listRef} className="space-y-4 max-h-80 overflow-hidden scrollbar-none pr-2 pb-2 flex-1">
            {campusNews.map((news, index) => (
              <li key={index} className="pb-2 border-b border-white">{news}</li>
            ))}
          </ul>
        </div>

        {/* Events Section */}
        <div className="min-h-[40vh] bg-[#23485A] text-white p-6 rounded-xl flex flex-col">
          <h2 className="text-3xl font-bold mb-4 sticky top-0 bg-[#23485A] py-2 z-10">Events</h2>
          <ul ref={listRef} className="space-y-4 max-h-80 overflow-hidden scrollbar-none pr-2 pb-2 flex-1">
            {events.map((event, index) => (
              <li key={index} className="pb-2 border-b border-white">{event}</li>
            ))}
          </ul>
        </div>

        {/* Announcements Section (Now Full Width When Wrapped) */}
        <div className="min-h-[40vh] bg-[#23485A] text-white p-6 rounded-xl flex flex-col sm:col-span-2 md:col-span-1 w-full">
          <h2 className="text-3xl font-bold mb-4 sticky top-0 bg-[#23485A] py-2 z-10">Announcements</h2>
          <ul ref={listRef} className="space-y-4 max-h-80 overflow-hidden scrollbar-none pr-2 pb-2 flex-1">
            {announcements.map((item, index) => (
              <li key={index} className={`pb-2 ${index < announcements.length - 1 ? 'border-b border-white' : ''}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
