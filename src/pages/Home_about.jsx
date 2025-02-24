import React from 'react';

const Home_about = () => {
  const sections = [
    {
      title: 'ABOUT IIITN',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius iste, perspiciatis laboriosam laudantium libero hic quisquam nisi repellat ullam, odit exercitationem ipsa consequatur sapiente maxime aspernatur quia mollitia vero!',
      imageSrc: 'images/home/iiitn1.jpg',
      buttonText: 'read more',
      isNewsLetter: true,
    },
    {
      title: 'Director corner',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius iste, perspiciatis laboriosam laudantium libero hic quisquam nisi repellat ullam, odit exercitationem ipsa consequatur sapiente maxime aspernatur quia mollitia vero!',
      imageSrc: 'images/home/director.jpg',
      buttonText: 'read more',
      isNewsLetter: false,
    }
  ];

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-evenly gap-4">
        {sections.map((section, index) => (
          <div key={index} className="w-full md:w-[40%] p-4 mt-4 sm:mt-0 flex flex-col">
            <div className="text-2xl font-bold mb-4">{section.title}</div>
            <div className="flex flex-col-reverse sm:flex-row bg-gray-200 p-2 rounded-lg shadow-md md:min-w-[300px] sm:h-[250px]">
              <div className="w-full sm:w-3/5 flex flex-col justify-between p-2">
                <p className="text-sm md:text-xs xl:text-sm leading-relaxed">{section.content}</p>
                <button className="bg-white text-gray-500 capitalize py-1 px-2 hover:bg-[#002D62] hover:text-white rounded border border-gray-400 flex items-center space-x-2 w-max">
                  <span>{section.buttonText}</span>
                  {/* {section.isNewsLetter && <span>&rarr;</span>} */}
                </button>
              </div>
              <div className="w-full sm:w-2/5">
                <img 
                  src={section.imageSrc} 
                  alt={section.title} 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_about;
