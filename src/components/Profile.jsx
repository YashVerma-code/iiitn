import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="max-w-5xl mx-auto p-6 flex justify-between flex-col md:flex-row items-center md:items-start gap-6 mt-10">
      <img
        src={profile.Imgsrc}
        alt="Shri Ravi Sharma"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
      />

      <div className="flex-1 mb-10">
        <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
        <h3 className="text-lg font-semibold text-blue-700">
          {profile.designation}
        </h3>
        <a
          href="mailto:chairman@iiitn.ac.in"
          className="text-sm text-blue-500 hover:underline"
        >
          {profile.mailId}
        </a>
        {profile.details.map((detail, index) => (
          <p className="mt-2 text-gray-700 leading-relaxed" key={index}>{detail}</p>
        ))}

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.qualities.map((quality,index)=>(
            <span key={index} className="px-3 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {quality}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
