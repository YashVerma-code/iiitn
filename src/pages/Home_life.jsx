import React from 'react';

const testimonials = [
  {

    id: 1,
    name: "3rd Convocation",
    // status: "Verified Graduate",
    title: "IIIT Nagpur held its 3rd convocation, celebrating achievements and excellence. The institute honored graduates with degrees, recognizing their dedication and hard work.",
    content: "The convocation was a grand event attended by esteemed faculty and guests. Students were awarded degrees for their exceptional performances. The atmosphere was filled with pride and joy as graduates embarked on new journeys. Many have already secured roles in reputed organizations, reflecting the institute’s academic strength.",
    image: "images/home/news.jpg",
    bgColor: "bg-[#FF8500]",
    textColor: "text-white",
    linkColor: "text-white hover:underline",
    fontFamily: "font-sans"


  },
  {
    id: 2,
    name: "National Education Policy",
    // status: "Verified Graduate",
    title: "Celebrating three years of the National Education Policy, highlighting its transformative impact on learning, skill development, and future career opportunities.",
    content: "The policy has revolutionized education by focusing on holistic growth and innovation. It has empowered students with practical knowledge and adaptability. Schools and colleges nationwide have embraced its vision, ensuring an inclusive, flexible, and multidisciplinary learning experience. The journey so far has been inspiring, shaping a new era of education in India.",
    bgColor: "bg-[#4C7B8B]",
    textColor: "text-white",
    linkColor: "text-white hover:underline",
    fontFamily: "font-sans"
  },
  {
    id: 3,
    name: "IIITN & HCL",
    // status: "Verified Graduate",
    title: "IIITN & HCL Foundation signed an MoU to undertake mass afforestation, promoting sustainability and ecological restoration.",
    content: "The collaboration aims to drive large-scale tree plantation, enhancing biodiversity and combating climate change. This partnership fosters environmental consciousness and ensures a greener future.",
    bgColor: "bg-[#3B6790]",
    textColor: "text-gray-200",
    linkColor: "text-white",
    fontFamily: "font-sans"
  }
  ,

  {
    id: 4,
    name: "Startup Ecosystem",
    // status: "Verified Graduate",
    title: "IIITN launches Innovation Cell to boost the startup ecosystem.",
    content: "IIIT Nagpur has introduced an Innovation Cell to foster entrepreneurship and technological advancements. The initiative aims to support aspiring entrepreneurs by providing mentorship, funding opportunities, and industry collaborations. With a focus on research-driven innovation, the cell will help students and startups transform ideas into viable business ventures.",
    bgColor: "bg-[#23485A]",
    textColor: "text-gray-300",
    linkColor: "text-gray-100 hover:underline",
    fontFamily: "font-sans"
  }

  ,
  {
    id: 5,
    name: "IIIT Nagpur",
    status: "Social Media Update",
    title: "IIITN Expands Digital Presence Across Social Media Platforms",
    content: "IIIT Nagpur is strengthening its digital footprint by actively engaging with students, alumni, and industry leaders on various social media platforms. Follow us for the latest updates on academic events, research breakthroughs, and student achievements. Stay connected and be a part of our growing online community! IIIT Nagpur is strengthening its digital footprint by actively engaging with students, alumni, and industry leaders on various social media platforms. Follow us for the latest updates on academic events, research breakthroughs, and student achievements. Stay connected and be a part of our growing online community!",
    bgColor: "bg-[#3B6790]",
    textColor: "text-gray-200",
    linkColor: "text-bg-[rgb(12_42_70)] hover:underline",
    fontFamily: "font-serif"
  }

];

const Home_life = () => {
  return (
    <>
      <div className="news text-center text-5xl ">News</div>
      <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-y-4 lg:gap-x-4">
        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className={`p-6 rounded-lg shadow-lg ${testimonial.bgColor} ${testimonial.textColor} ${testimonial.fontFamily}`}>
                <div className="mb-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm opacity-70">{testimonial.status}</p>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  <a href="#" className={`${testimonial.linkColor} font-bold`}>{testimonial.title}</a>
                </h4>
                <p className="text-sm opacity-80">{testimonial.content}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {testimonials.slice(2, 4).map((testimonial) => (
              <div key={testimonial.id} className={`p-6 rounded-lg shadow-lg ${testimonial.bgColor} ${testimonial.textColor} ${testimonial.fontFamily}`}>
                <div className="mb-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm opacity-70">{testimonial.status}</p>
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  <a href="#" className={`${testimonial.linkColor} font-bold`}>{testimonial.title}</a>
                </h4>
                <p className="text-sm opacity-80">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`p-6 rounded-lg shadow-lg ${testimonials[4].bgColor} ${testimonials[4].textColor} ${testimonials[4].fontFamily}`}>
          <div className="mb-4">
            <p className="font-bold">{testimonials[4].name}</p>
            <p className="text-sm opacity-70">{testimonials[4].status}</p>
          </div>
          <h4 className="font-semibold text-lg mb-2">
            <a href="#" className={`${testimonials[4].linkColor} font-bold`}>{testimonials[4].title}</a>
          </h4>
          <p className="text-sm opacity-80">{testimonials[4].content}</p>
        </div>
      </div>
    </>
  );
};

export default Home_life;
