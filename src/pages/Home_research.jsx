import React, { useState, useEffect, useRef } from 'react';

const blogPosts = [
  {
    img: 'images/home/research1.png',
    title: 'LLMs/LVMs: Under The Hood',
    date: '📅 February 12, 2025',
    author: '👨‍🎓 Prof Ponnurangam Kumaraguru PK'
  },
  {
    img: 'images/home/research2.jpg',
    title: 'Frameshift – Physicist Dr. Nita Parekh’s curious trail to computational biology',
    date: '📅 February 6, 2025',
    author: '👩 Deepa Shailendra'
  }
];

const announcements = [
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of Server with Tape Library →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of RTX 6000 (Ada) GPU Server →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
  'RFP for Planning, Designing, Architecture and consultancy for “Construction of Multi-storied Boys Hostel Tower Block” in IIIT-H Campus at Gachibowli, Hyderabad →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
  'Notice Inviting Tender (NIT) under Two-Cover Bid System for supply of 4 x H100 GPU Server →',
];

const importantLinks = [
  'Academic Calendar →',
  'Course Registration →',
  'Exam Schedules →',
  'Student Handbook →'
];

const Home_research = () => {
  const [showAnnouncements, setShowAnnouncements] = useState(true);
  const [scrolling, setScrolling] = useState(true);
  const listRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (!scrolling) return;

    const scrollList = () => {
      if (listRef.current) {
        listRef.current.scrollTop += 1; // Moves content up slowly

        if (listRef.current.scrollTop >= listRef.current.scrollHeight - listRef.current.clientHeight) {
          listRef.current.scrollTop = 0; // Loop back to top when reaching the end
        }
      }
    };

    const scrollInterval = setInterval(scrollList, 100);

    return () => clearInterval(scrollInterval);
  }, [scrolling]);

  return (
    <div className="blog-announcements  bg-gray-100 p-16 flex flex-wrap gap-8">
      {/* Research Section */}
      <div className="flex-1 min-w-full sm:min-w-[60%]">
        <h2 className="text-3xl font-bold mb-6 pl-10">Research Area</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className=" bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col justify-between min-h-[320px]"
            >
              <img src={post.img} alt="img" className="w-full aspect-square h-48 object-cover mb-4" />
              <div className='h-full'>
                <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <p className="text-sm text-gray-600 mb-4">{post.author}</p>
              </div>
              <button className="bg-[#4C7B8B] text-white px-4 py-2 rounded-lg self-start w-full">→</button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4 flex-wrap">
          <button className="border-2 border-teal-500 text-teal-500 px-6 py-2 rounded-lg">Research Centres →</button>
        </div>
      </div>

      {/* Announcements/Links Section */}
      <div className="flex-1 max-h-full min-w-full sm:min-w-[35%] bg-[rgb(12_42_70)] text-white p-6 rounded-xl flex flex-col relative">
        <h2 className="text-base sm:text-xl lg:text-3xl font-bold mb-4 sticky top-0 bg-[rgb(12_42_70)] py-2 z-10">
          {showAnnouncements ? 'Announcements' : 'Important Links'}
        </h2>
        <ul
          ref={listRef}
          className="space-y-4 h-full max-h-[28rem] md:max-h-[25rem] lg:max-h-[23rem] 2xl:max-h-[21rem] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-300 pr-2 pb-2 flex-1"
          onMouseEnter={() => setScrolling(false)}
          onMouseLeave={() => setScrolling(true)}
        >
          {(showAnnouncements ? announcements : importantLinks).map((item, index) => (
            <li
              key={index}
              className={`pb-2 ${index < (showAnnouncements ? announcements : importantLinks).length - 1 ? 'border-b border-white' : ''
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="w-full mt-2 sm:mt-auto flex gap-4 flex-wrap">
          <button
            onClick={() => setShowAnnouncements(!showAnnouncements)}
            className="text-xs md:text-base border-2 border-white text-white p-1 sm:p-2 rounded-md w-fit"
          >
            {showAnnouncements ? 'Important Links →' : 'Announcements →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home_research;
