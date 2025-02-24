import React, { useState, useEffect, useRef } from 'react';

const blogPosts = [
  {
    img: 'images/home/research1.png',
    title: 'Conferences, Workshops, Certifications',
    date: '📅 February 12, 2025',
    author: '👨‍🎓 WORKSHOPS / STTPs/CERTIFICATIONS / TRAININGS',
    link: '/conferences'
  },
  {
    img: 'images/home/research2.jpg',
    title: 'International Research Collaboration',
    date: '📅 February 6, 2025',
    author: '👩 Dr. Charu Goel',
    link: '/international_research'
  }
];

const announcements = [
  'Recruitment Notice for the Post of Registrar',
  'Schedule of Written Test and Interview admission Schedule Notification Winter 2024-2025 (Visvesvaraya Full-time PhD Scheme for Electronics and IT: Phase II)',
  'Online Certificate Programme on "Foundations of Cybersecurity" From 25th March to 25th September, 2025',
  'Revised PhD Admission Schedule Notification Winter 2024-2025 (Visvesvaraya Full-time PhD Scheme for Electronics and IT: Phase II)',
  'Online Winter Faculty Development Programme on "Biometrics Security in the Generative AI Era" From 1st March to 12th March, 2025 hosted by Dept. of Computer Science and Engineering, IIIT, Nagpur in association with E&ICT Academy, PDPM IIITDM, Jabalpur',
  'FDP on "Intricacies of Analog & Mixed Signal design" from 17th-28th Feb. 2025 Hosted by IIIT Nagpur in Association with E&ICT Academy, PDPM IIITDM Jabalpur.',
  'Online Winter Faculty Development Programme on "Quantum Computing" From February, 17th to 28th 2025',
  'Five Months Online Certification Programme on Generative AI (GenAI)',
  'Holiday list 2025',
  'Notice Regarding Changes in Official Institute Bank Account Number',
  'New Bus Timings',
  'Notice for Accommodation on Paid Basis',
  'NISP Circular',
  'Fees Details Link'
];

const importantLinks = [
  { text: "Internship →", link: "/internship" },
  { text: "Online Fees Payment →", link: "/fees_payment" },
  { text: "Academic Calendar →", link: "/academic-calender" },
  { text: "Time Table →", link: "/time_table" },
  { text: "Facilities →", link: "/facilities" },
  { text: "Student Clubs →", link: "/student-clubs" },
  { text: "RTI →", link: "/rti" },
  { text: "CPGRAMS →", link: "/cpgrams" },
];

const Home_research = () => {
  const [showAnnouncements, setShowAnnouncements] = useState(true);
  const [scrolling, setScrolling] = useState(true);
  const listRef = useRef(null);

  useEffect(() => {
    if (!scrolling) return;
    const scrollList = () => {
      if (listRef.current) {
        listRef.current.scrollTop += 1;
        if (listRef.current.scrollTop >= listRef.current.scrollHeight - listRef.current.clientHeight) {
          listRef.current.scrollTop = 0;
        }
      }
    };
    const scrollInterval = setInterval(scrollList, 100);
    return () => clearInterval(scrollInterval);
  }, [scrolling]);

  return (
    <div className="blog-announcements p-16 flex flex-wrap gap-8">
      {/* Research Section */}
      <div className="flex-1 min-w-full sm:min-w-[60%]">
        <h2 className="text-3xl font-bold mb-6 pl-10">Faculty Achievement</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden p-4 flex flex-col justify-between min-h-[320px]">
              <img src={post.img} alt="Research" className="w-full aspect-square h-48 object-cover mb-4" />
              <div className='h-full'>
                <h3 className="text-base lg:text-lg xl:text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                <p className="text-sm text-gray-600 mb-4">{post.author}</p>
              </div>
              <a href={post.link}>
                <button className="bg-[#4C7B8B] text-white px-4 py-2 rounded-lg self-start w-full">
                  Read More
                </button>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4 flex-wrap">
          <button className="border-2 border-teal-500 text-teal-500 px-6 py-2 rounded-lg">
            Research Centres →
          </button>
        </div>
      </div>

      {/* Announcements/Links Section */}
      <div className="flex-1 max-h-full min-w-full sm:min-w-[35%] bg-[rgb(12_42_70)] text-white p-6 rounded-xl flex flex-col relative">
        <div className="flex justify-between items-center sticky top-0 bg-[rgb(12_42_70)] py-2 z-10">
          <h2 className="text-base sm:text-xl lg:text-3xl font-bold">
            {showAnnouncements ? 'Announcements' : 'Important Links'}
          </h2>
          <a href="/announcement">
            <button className="text-sm bg-white text-[rgb(12_42_70)] px-3 py-1 rounded-md">
              Read More →
            </button>
          </a>
        </div>
        <ul
          ref={listRef}
          className="space-y-4 h-full max-h-[28rem] md:max-h-[25rem] lg:max-h-[23rem] 2xl:max-h-[21rem] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-300 pr-2 pb-2 flex-1"
          onMouseEnter={() => setScrolling(false)}
          onMouseLeave={() => setScrolling(true)}
        >
          {(showAnnouncements ? announcements : importantLinks).map((item, index) => (
            <li key={index} className={`pb-2 ${index < (showAnnouncements ? announcements : importantLinks).length - 1 ? 'border-b border-white' : ''}`}>
              {showAnnouncements ? (
                item
              ) : (
                <a href={item.link} className="text-white hover:underline">{item.text}</a>
              )}
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
