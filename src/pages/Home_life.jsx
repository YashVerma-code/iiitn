import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Priyanshu ",
    status: "Verified Graduate",
    title: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    content: "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.",
    // bgColor: "bg-[#EFB036]",
    bgColor: "bg-[#FF8500]",
    textColor: "text-white",
    linkColor: "text-white hover:underline",
    fontFamily: "font-sans"
  },
  {
    id: 2,
    name: "Varun",
    status: "Verified Graduate",
    title: "The team was very supportive and kept me motivated",
    content: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
    bgColor: "bg-[#4C7B8B]",
    textColor: "text-white",
    linkColor: "text-white hover:underline",
    fontFamily: "font-sans"
  },
  {
    id: 3,
    name: "mera yashu yashu",
    status: "Verified Graduate",
    title: "An overall wonderful and rewarding experience",
    content: "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    bgColor: "bg-[#3B6790]",
    textColor: "text-gray-200",
    linkColor: "text-white",
    fontFamily: "font-sans"
  },
  {
    id: 4,
    name: "basanti",
    status: "Verified Graduate",
    title: "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    content: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
    bgColor: "bg-[#23485A]",
    textColor: "text-gray-300",
    linkColor: "text-gray-100 hover:underline",
    fontFamily: "font-sans"
  },
  {
    id: 5,
    name: "Priyanshu",
    status: "Verified Graduate",
    title: "Such a life-changing experience. Highly recommended!",
    content: "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
    bgColor: "bg-[#3B6790]",
    textColor: "text-gray-200",
    linkColor: "text-bg-[rgb(12_42_70)] hover:underline",
    fontFamily: "font-serif"
  }
];

const Home_life = () => {
  return (
    <>
      <div className="news text-center text-5xl font-serif ">News</div>
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
