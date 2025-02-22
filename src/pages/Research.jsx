import React, { useState } from "react";

const researchData = [
  {
    year: 2024,
    category: "Conference Papers",
    title: "Modified Shuffled Complex Evolution Algorithm for Energy Efficiency in WSNs",
    authors: "Amit Shewale, Amruta Lipare, Mahesh Chowdary Kongara",
    journal: "15th International IEEE Conference on computing, communication and networking Technologies, IIT Mandi, June 2024",
    link: "#",
  },
  {
    year: 2024,
    category: "Journal Papers",
    title: "Twitter Sentiment Analysis Using Ensemble of Multi-channel Model",
    authors: "Jitendra Tembhurne, Kirtan Lakhotia, Anant Agrawal",
    journal: "Knowledge and Information Systems, October 2024",
    link: "https://doi.org/10.1007/s10115-024-02256-7",
  },
  {
    year: 2023,
    category: "Conference Papers",
    title: "A Taxonomy of IoT Security Attacks and Emerging Solutions",
    authors: "Unknown",
    journal: "2nd International Conference on Paradigm Shifts in Communications Embedded Systems, Machine Learning and Signal Processing (PCEMS), Nagpur, India, 2023",
    link: "10.1109/PCEMS58491.2023.10136032",
  },
  {
    year: 2022,
    category: "Journal Papers",
    title: "Multi-channel Deep Model for Classification of Alzheimer’s Disease Using Transfer Learning",
    authors: "Dharwada, S., Tembhurne, J., & Diwan, T.",
    journal: "International Conference on Distributed Computing and Internet Technology, January 2022",
    link: "#",
  },
];

const Research = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredData = researchData.filter((item) => 
    (selectedYear === "All" || item.year === parseInt(selectedYear)) &&
    (selectedCategory === "All" || item.category === selectedCategory) &&
    (searchTerm === "" || item.authors.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">IIITN Research Publications</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="All">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>

        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Journal Papers">Journal Papers</option>
          <option value="Conference Papers">Conference Papers</option>
        </select>

        <input
          type="text"
          className="p-2 border rounded-md w-full md:w-1/3"
          placeholder="Search by author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg mb-4 h-40 w-4/5 mw-4/5 flex flex-col justify-between">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="italic text-gray-600">{item.authors}</p>
            <span className="inline-block mt-2 px-3 py-1 rounded bg-blue-200">
              {item.journal}
            </span>
            <div className="mt-2">
              <a href={item.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default Research;
